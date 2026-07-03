#!/usr/bin/env python3
"""
Backend API Tests for Court Marriage Lucknow
Tests all endpoints at /api base path
"""

import requests
import json
from datetime import datetime

# Get backend URL from frontend .env
BACKEND_URL = "https://counsel-connect-108.preview.emergentagent.com/api"

def print_test_header(test_name):
    print(f"\n{'='*80}")
    print(f"TEST: {test_name}")
    print(f"{'='*80}")

def print_result(success, message, details=None):
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")
    if details:
        print(f"Details: {json.dumps(details, indent=2, default=str)}")
    print()

def test_root_endpoint():
    """Test GET /api/ - should return welcome message"""
    print_test_header("GET /api/ - Root Endpoint")
    
    try:
        response = requests.get(f"{BACKEND_URL}/")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Court Marriage Lucknow API":
                print_result(True, "Root endpoint returned correct message", data)
                return True
            else:
                print_result(False, f"Unexpected message: {data}", data)
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response.text)
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_registration_valid():
    """Test POST /api/registration with valid payload"""
    print_test_header("POST /api/registration - Valid Payload")
    
    payload = {
        "service": "Court Marriage",
        "date_of_marriage": "2024-06-15",
        "marriage_solemnized": "Yes",
        "groom": {
            "full_name": "Rajesh Kumar Singh",
            "email": "rajesh.singh@example.com",
            "mobile": "+91-9876543210",
            "dob": "1990-05-15",
            "marital_status": "Unmarried",
            "religion": "Hindu",
            "address_line1": "123 MG Road",
            "address_line2": "Near City Mall",
            "city": "Lucknow",
            "state": "Uttar Pradesh",
            "pin": "226001"
        },
        "bride": {
            "full_name": "Priya Sharma",
            "email": "priya.sharma@example.com",
            "mobile": "+91-9876543211",
            "dob": "1992-08-20",
            "marital_status": "Unmarried",
            "religion": "Hindu",
            "address_line1": "456 Hazratganj",
            "address_line2": "Opposite Park",
            "city": "Lucknow",
            "state": "Uttar Pradesh",
            "pin": "226002"
        },
        "agreed": True
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/registration", json=payload)
        
        if response.status_code == 200:
            data = response.json()
            # Check if response has required fields
            if "id" in data and "created_at" in data:
                print_result(True, "Registration created successfully", {
                    "id": data["id"],
                    "created_at": data["created_at"],
                    "groom": data["groom"]["full_name"],
                    "bride": data["bride"]["full_name"]
                })
                return True, data["id"]
            else:
                print_result(False, "Response missing required fields (id, created_at)", data)
                return False, None
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response.text)
            return False, None
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False, None

def test_registration_agreed_false():
    """Test POST /api/registration with agreed=false - should return 400"""
    print_test_header("POST /api/registration - agreed=false (Should Fail)")
    
    payload = {
        "service": "Court Marriage",
        "date_of_marriage": "2024-06-15",
        "marriage_solemnized": "Yes",
        "groom": {
            "full_name": "Test Groom",
            "email": "test.groom@example.com",
            "mobile": "+91-9999999999"
        },
        "bride": {
            "full_name": "Test Bride",
            "email": "test.bride@example.com",
            "mobile": "+91-9999999998"
        },
        "agreed": False
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/registration", json=payload)
        
        if response.status_code == 400:
            data = response.json()
            print_result(True, "Correctly rejected registration with agreed=false", data)
            return True
        else:
            print_result(False, f"Expected 400, got {response.status_code}", response.text)
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_contact_valid():
    """Test POST /api/contact with valid payload"""
    print_test_header("POST /api/contact - Valid Payload")
    
    payload = {
        "name": "Amit Verma",
        "email": "amit.verma@example.com",
        "subject": "Query about Court Marriage Process",
        "message": "I would like to know more about the court marriage process in Lucknow. What documents are required?"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload)
        
        if response.status_code == 200:
            data = response.json()
            # Check if response has required fields
            if "id" in data and "created_at" in data:
                print_result(True, "Contact created successfully", {
                    "id": data["id"],
                    "created_at": data["created_at"],
                    "name": data["name"],
                    "subject": data["subject"]
                })
                return True, data["id"]
            else:
                print_result(False, "Response missing required fields (id, created_at)", data)
                return False, None
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response.text)
            return False, None
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False, None

def test_contact_invalid_email():
    """Test POST /api/contact with invalid email - should return 422"""
    print_test_header("POST /api/contact - Invalid Email (Should Fail)")
    
    payload = {
        "name": "Test User",
        "email": "not-a-valid-email",
        "subject": "Test Subject",
        "message": "Test message"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload)
        
        if response.status_code == 422:
            data = response.json()
            print_result(True, "Correctly rejected invalid email", data)
            return True
        else:
            print_result(False, f"Expected 422, got {response.status_code}", response.text)
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_list_registrations():
    """Test GET /api/registrations - should list registrations"""
    print_test_header("GET /api/registrations - List Registrations")
    
    try:
        response = requests.get(f"{BACKEND_URL}/registrations")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print_result(True, f"Retrieved {len(data)} registrations", {
                    "count": len(data),
                    "sample": data[0] if data else "No registrations yet"
                })
                return True
            else:
                print_result(False, "Response is not a list", data)
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response.text)
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_list_contacts():
    """Test GET /api/contacts - should list contacts"""
    print_test_header("GET /api/contacts - List Contacts")
    
    try:
        response = requests.get(f"{BACKEND_URL}/contacts")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print_result(True, f"Retrieved {len(data)} contacts", {
                    "count": len(data),
                    "sample": data[0] if data else "No contacts yet"
                })
                return True
            else:
                print_result(False, "Response is not a list", data)
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response.text)
            return False
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_mongodb_persistence():
    """Test MongoDB persistence by creating and retrieving data"""
    print_test_header("MongoDB Persistence Test")
    
    print("Step 1: Create a new registration...")
    success, reg_id = test_registration_valid()
    if not success:
        print_result(False, "Failed to create registration for persistence test")
        return False
    
    print("\nStep 2: Retrieve registrations and verify the new one exists...")
    try:
        response = requests.get(f"{BACKEND_URL}/registrations")
        if response.status_code == 200:
            registrations = response.json()
            found = any(r.get("id") == reg_id for r in registrations)
            if found:
                print_result(True, f"Registration {reg_id} found in database - MongoDB persistence working")
                return True
            else:
                print_result(False, f"Registration {reg_id} not found in database", {
                    "created_id": reg_id,
                    "found_ids": [r.get("id") for r in registrations[:5]]
                })
                return False
        else:
            print_result(False, f"Failed to retrieve registrations: {response.status_code}")
            return False
    except Exception as e:
        print_result(False, f"Exception during persistence check: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("\n" + "="*80)
    print("COURT MARRIAGE LUCKNOW - BACKEND API TEST SUITE")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Test Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*80)
    
    results = {}
    
    # Test 1: Root endpoint
    results["root_endpoint"] = test_root_endpoint()
    
    # Test 2: Valid registration
    success, _ = test_registration_valid()
    results["registration_valid"] = success
    
    # Test 3: Registration with agreed=false
    results["registration_agreed_false"] = test_registration_agreed_false()
    
    # Test 4: Valid contact
    success, _ = test_contact_valid()
    results["contact_valid"] = success
    
    # Test 5: Contact with invalid email
    results["contact_invalid_email"] = test_contact_invalid_email()
    
    # Test 6: List registrations
    results["list_registrations"] = test_list_registrations()
    
    # Test 7: List contacts
    results["list_contacts"] = test_list_contacts()
    
    # Test 8: MongoDB persistence
    results["mongodb_persistence"] = test_mongodb_persistence()
    
    # Summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\n{'='*80}")
    print(f"TOTAL: {passed}/{total} tests passed ({(passed/total)*100:.1f}%)")
    print(f"Test Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*80)
    
    return passed == total

if __name__ == "__main__":
    success = run_all_tests()
    exit(0 if success else 1)
