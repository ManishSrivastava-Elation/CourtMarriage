from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email config
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
SMTP_FROM = os.environ.get("SMTP_FROM", SMTP_USER)
NOTIFY_EMAIL = os.environ.get("NOTIFY_EMAIL", "manish@elationsoft.net")

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class PersonInfo(BaseModel):
    full_name: Optional[str] = ""
    email: Optional[str] = ""
    mobile: Optional[str] = ""
    dob: Optional[str] = ""
    marital_status: Optional[str] = ""
    religion: Optional[str] = ""
    address_line1: Optional[str] = ""
    address_line2: Optional[str] = ""
    city: Optional[str] = ""
    state: Optional[str] = ""
    pin: Optional[str] = ""


class RegistrationCreate(BaseModel):
    service: str = "Court Marriage"
    date_of_marriage: Optional[str] = ""
    marriage_solemnized: Optional[str] = "Yes"
    groom: PersonInfo
    bride: PersonInfo
    agreed: bool = False


class Registration(RegistrationCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class Contact(ContactCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: datetime = Field(default_factory=datetime.utcnow)


class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str


# ---------- Email helper ----------
def send_email(subject: str, html_body: str, reply_to: Optional[str] = None) -> dict:
    """Send an email via SMTP. Returns dict with status."""
    if not SMTP_USER or "your-gmail" in (SMTP_USER or "") or not SMTP_PASSWORD or "your-16-char" in (SMTP_PASSWORD or ""):
        logger.warning("SMTP credentials are dummy/not configured. Skipping email send.")
        return {"sent": False, "reason": "SMTP not configured (using dummy credentials)"}

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = SMTP_FROM or SMTP_USER
        msg["To"] = NOTIFY_EMAIL
        if reply_to:
            msg["Reply-To"] = reply_to

        msg.attach(MIMEText(html_body, "html"))

        context = ssl.create_default_context()
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=15) as server:
            server.ehlo()
            server.starttls(context=context)
            server.ehlo()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(SMTP_FROM or SMTP_USER, [NOTIFY_EMAIL], msg.as_string())
        logger.info(f"Email sent to {NOTIFY_EMAIL}: {subject}")
        return {"sent": True}
    except Exception as e:
        logger.exception("Failed to send email")
        return {"sent": False, "reason": str(e)}


def _row(label: str, value: str) -> str:
    return f"<tr><td style='padding:6px 10px;border:1px solid #e0e0e0;background:#f7f7f7;font-weight:600;'>{label}</td><td style='padding:6px 10px;border:1px solid #e0e0e0;'>{value or '-'}</td></tr>"


def _person_table(title: str, p: PersonInfo) -> str:
    address = ", ".join([x for x in [p.address_line1, p.address_line2, p.city, p.state, p.pin] if x])
    rows = "".join([
        _row("Full Name", p.full_name or ""),
        _row("Email", p.email or ""),
        _row("Mobile", p.mobile or ""),
        _row("Date of Birth", p.dob or ""),
        _row("Marital Status", p.marital_status or ""),
        _row("Religion", p.religion or ""),
        _row("Address", address),
    ])
    return f"""
    <h3 style='color:#1a2f57;margin:16px 0 6px'>{title}</h3>
    <table style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;'>
      {rows}
    </table>
    """


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Court Marriage Lucknow API"}


@api_router.post("/registration", response_model=Registration)
async def create_registration(payload: RegistrationCreate):
    if not payload.agreed:
        raise HTTPException(status_code=400, detail="You must agree to the Terms of Service.")

    reg = Registration(**payload.dict())
    await db.registrations.insert_one(reg.dict())

    subject = f"[Court Marriage Lucknow] New Registration  {reg.groom.full_name or 'Groom'} & {reg.bride.full_name or 'Bride'}"
    html = f"""
    <div style='font-family:Arial,sans-serif;color:#333;max-width:680px;margin:auto'>
      <h2 style='color:#1a2f57;margin-bottom:4px'>New Court Marriage Registration Request</h2>
      <p style='color:#666;margin-top:0'>Received via courtmarriagelucknow.com</p>
      <p><b>Reference ID:</b> {reg.id}<br/>
         <b>Service:</b> {reg.service}<br/>
         <b>Date of Marriage:</b> {reg.date_of_marriage or '-'}<br/>
         <b>Marriage Solemnized:</b> {reg.marriage_solemnized or '-'}<br/>
         <b>Submitted At:</b> {reg.created_at.strftime('%d %b %Y, %H:%M UTC')}</p>
      {_person_table('Groom (Boy) Details', reg.groom)}
      {_person_table('Bride (Girl) Details', reg.bride)}
      <p style='color:#666;font-size:12px;margin-top:16px'>This is an automated notification from courtmarriagelucknow.com</p>
    </div>
    """
    email_result = send_email(subject, html, reply_to=reg.groom.email or reg.bride.email or None)
    logger.info(f"Registration created: {reg.id} | email: {email_result}")
    return reg


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    entry = Contact(**payload.dict())
    await db.contacts.insert_one(entry.dict())

    subject = f"[Court Marriage Lucknow] Contact  {entry.subject}"
    html = f"""
    <div style='font-family:Arial,sans-serif;color:#333;max-width:600px;margin:auto'>
      <h2 style='color:#1a2f57'>New Contact Message</h2>
      <p><b>Name:</b> {entry.name}<br/>
         <b>Email:</b> {entry.email}<br/>
         <b>Subject:</b> {entry.subject}<br/>
         <b>Received At:</b> {entry.created_at.strftime('%d %b %Y, %H:%M UTC')}</p>
      <h3 style='color:#1a2f57;margin-top:16px'>Message</h3>
      <div style='background:#f7f7f7;padding:12px;border-left:3px solid #ef7d1c;white-space:pre-wrap'>{entry.message}</div>
      <p style='color:#666;font-size:12px;margin-top:16px'>This is an automated notification from courtmarriagelucknow.com</p>
    </div>
    """
    email_result = send_email(subject, html, reply_to=str(entry.email))
    logger.info(f"Contact created: {entry.id} | email: {email_result}")
    return entry


@api_router.get("/registrations", response_model=List[Registration])
async def list_registrations():
    items = await db.registrations.find().sort("created_at", -1).to_list(500)
    return [Registration(**i) for i in items]


@api_router.get("/contacts", response_model=List[Contact])
async def list_contacts():
    items = await db.contacts.find().sort("created_at", -1).to_list(500)
    return [Contact(**i) for i in items]


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    items = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**i) for i in items]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
