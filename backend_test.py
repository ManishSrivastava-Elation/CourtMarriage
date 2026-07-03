#!/usr/bin/env python3
"""
Backend SMTP Live Test - Court Marriage Lucknow
Tests Gmail SMTP integration end-to-end
"""

import requests
import json
from datetime import datetime

# Backend URL from frontend/.env
BACKEND_URL = "https://counsel-connect-108.preview.emergentagent.com/api"

def test_contact_form_smtp():
    """Test POST /api/contact with realistic payload to verify SMTP"""
    print("\n" + "="*80)
    print("TEST 1: Contact Form SMTP Integration")
    print("="*80)
    
    payload = {
        "name": "Rajesh Kumar",
        "email": "rajesh.kumar@example.com",
        "subject": "SMTP Live Test - Court Marriage Lucknow",
        "message": "This is a test to verify Gmail SMTP integration is sending to manish@elationsoft.net. I am interested in court marriage services in Lucknow."
    }
    
    print(f"\n📤 Sending POST to {BACKEND_URL}/contact")
    print(f"Payload: {json.dumps(payload, indent=2)}")
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/contact",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        print(f"\n✅ Response Status: {response.status_code}")
        print(f"Response Body: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200:
            print("\n✅ Contact form submission successful!")
            return True
        else:
            print(f"\n❌ Contact form submission failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"\n❌ Error during contact form test: {str(e)}")
        return False


def test_registration_form_smtp():
    """Test POST /api/registration with realistic payload to verify SMTP"""
    print("\n" + "="*80)
    print("TEST 2: Registration Form SMTP Integration")
    print("="*80)
    
    payload = {
        "groom": {
            "name": "Amit Sharma",
            "father_name": "Ramesh Sharma",
            "age": 28,
            "address": "123 Civil Lines, Lucknow, Uttar Pradesh 226001",
            "phone": "+91-9876543210",
            "email": "amit.sharma@example.com"
        },
        "bride": {
            "name": "Priya Verma",
            "father_name": "Suresh Verma",
            "age": 25,
            "address": "456 Gomti Nagar, Lucknow, Uttar Pradesh 226010",
            "phone": "+91-9876543211",
            "email": "priya.verma@example.com"
        },
        "service": "Court Marriage",
        "date_of_marriage": "2024-02-15",
        "marriage_solemnized": "No",
        "agreed": True
    }
    
    print(f"\n📤 Sending POST to {BACKEND_URL}/registration")
    print(f"Payload: {json.dumps(payload, indent=2)}")
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/registration",
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=30
        )
        
        print(f"\n✅ Response Status: {response.status_code}")
        print(f"Response Body: {json.dumps(response.json(), indent=2)}")
        
        if response.status_code == 200:
            print("\n✅ Registration form submission successful!")
            return True
        else:
            print(f"\n❌ Registration form submission failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"\n❌ Error during registration form test: {str(e)}")
        return False


def main():
    print("\n" + "="*80)
    print("🔥 GMAIL SMTP LIVE TEST - Court Marriage Lucknow")
    print("="*80)
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Expected recipient: manish@elationsoft.net")
    print(f"SMTP Server: smtp.gmail.com:587")
    print(f"SMTP User: noreply@elationsoft.net")
    print("="*80)
    
    # Run tests
    contact_result = test_contact_form_smtp()
    registration_result = test_registration_form_smtp()
    
    # Summary
    print("\n" + "="*80)
    print("📊 TEST SUMMARY")
    print("="*80)
    print(f"Contact Form SMTP: {'✅ PASSED' if contact_result else '❌ FAILED'}")
    print(f"Registration Form SMTP: {'✅ PASSED' if registration_result else '❌ FAILED'}")
    print("="*80)
    
    print("\n📋 Next Step: Check backend logs for email send status")
    print("Command: tail -n 100 /var/log/supervisor/backend.*.log")
    print("\nLook for:")
    print("  ✅ 'Email sent to manish@elationsoft.net' (SUCCESS)")
    print("  ❌ 'Failed to send email' with exception (FAILURE)")
    print("  ⚠️  'SMTP credentials are dummy' (means creds still dummy)")
    print("="*80)


if __name__ == "__main__":
    main()
