#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

user_problem_statement: "Court Marriage Lucknow website with registration and contact forms"

backend:
  - task: "GET /api/ - Root endpoint"
    implemented: true
    working: true
    file: "/app/backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "Root endpoint tested successfully. Returns correct message: 'Court Marriage Lucknow API'"

  - task: "POST /api/registration - Valid payload"
    implemented: true
    working: true
    file: "/app/backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "Registration endpoint working correctly. Accepts valid payload with groom/bride nested objects, all persona fields, service, date_of_marriage, marriage_solemnized, and agreed=true. Returns 200 with Registration object containing id and created_at. Email send is properly skipped with dummy SMTP credentials without causing failures."

  - task: "POST /api/registration - agreed=false validation"
    implemented: true
    working: true
    file: "/app/backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "Validation working correctly. Returns 400 with error message 'You must agree to the Terms of Service.' when agreed=false"

  - task: "POST /api/contact - Valid payload"
    implemented: true
    working: true
    file: "/app/backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "Contact endpoint working correctly. Accepts valid payload with name, email, subject, message. Returns 200 with Contact object containing id and created_at. Email send is properly skipped with dummy SMTP credentials."

  - task: "POST /api/contact - Invalid email validation"
    implemented: true
    working: true
    file: "/app/backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "Email validation working correctly. Returns 422 with proper validation error when invalid email is provided"

  - task: "GET /api/registrations - List registrations"
    implemented: true
    working: true
    file: "/app/backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "List registrations endpoint working correctly. Returns array of previously created registrations sorted by created_at descending"

  - task: "GET /api/contacts - List contacts"
    implemented: true
    working: true
    file: "/app/backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "List contacts endpoint working correctly. Returns array of previously created contacts sorted by created_at descending"

  - task: "MongoDB persistence"
    implemented: true
    working: true
    file: "/app/backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "testing"
        comment: "MongoDB persistence verified. Created registration was successfully stored and retrieved from database. All data fields preserved correctly including nested groom/bride objects."

  - task: "SMTP Email Sending - Gmail Integration"
    implemented: true
    working: false
    file: "/app/backend/server.py"
    stuck_count: 1
    priority: "high"
    needs_retesting: false
    status_history:
      - working: false
        agent: "testing"
        comment: "CRITICAL: Gmail SMTP authentication failing with error 535 'Username and Password not accepted'. Tested both /api/contact and /api/registration endpoints - both APIs work correctly (return 200) but email sending fails. Fixed SMTP_PASSWORD format (removed spaces: 'oclv toeq baxd lyfq' -> 'oclvtoeqbaxdlyfq'). However, Gmail still rejects the credentials. The App Password 'oclvtoeqbaxdlyfq' is INVALID or REVOKED. User must generate a NEW Gmail App Password for noreply@elationsoft.net account. Steps: 1) Enable 2FA on Gmail account, 2) Go to Google Account > Security > 2-Step Verification > App passwords, 3) Generate new 16-char app password, 4) Update SMTP_PASSWORD in /app/backend/.env (without spaces)."

frontend:
  - task: "Frontend testing"
    implemented: true
    working: "NA"
    file: "/app/frontend/src/App.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "testing"
        comment: "Frontend testing not performed as per testing agent instructions (backend only)"

metadata:
  created_by: "testing_agent"
  version: "1.0"
  test_sequence: 2
  run_ui: false

test_plan:
  current_focus:
    - "SMTP Email Sending - Gmail Integration (CRITICAL: Invalid App Password)"
  stuck_tasks:
    - "SMTP Email Sending - Gmail Integration"
  test_all: false
  test_priority: "high_first"

agent_communication:
  - agent: "testing"
    message: "Backend testing completed successfully. All 8 API endpoints tested and working correctly. MongoDB persistence verified. Email functionality properly handles dummy SMTP credentials by skipping send without causing failures. All tests passed (8/8 - 100%). Backend is production-ready."
  - agent: "testing"
    message: "SMTP LIVE TEST COMPLETED - CRITICAL ISSUE FOUND: Gmail authentication is FAILING. Both /api/contact and /api/registration APIs work correctly (accept requests, return 200, save to DB), but email sending fails with SMTPAuthenticationError 535 'Username and Password not accepted'. I fixed the password format (removed spaces), but Gmail still rejects it. ROOT CAUSE: The Gmail App Password 'oclvtoeqbaxdlyfq' for noreply@elationsoft.net is INVALID or REVOKED. ACTION REQUIRED: User must generate a NEW Gmail App Password. Steps: 1) Ensure 2FA is enabled on noreply@elationsoft.net, 2) Go to Google Account > Security > 2-Step Verification > App passwords, 3) Generate new 16-character app password, 4) Update SMTP_PASSWORD in /app/backend/.env (enter without spaces as single string). Until this is fixed, emails will NOT be sent to manish@elationsoft.net."