# UI expectations

## User Onboarding Flow
The user onboarding experience should be clean, minimal, and distraction-free. The flow is designed to be fast and user-friendly, without any unnecessary steps or clutter.

🔄 Flow Steps:
1. Email Input

The user is prompted to enter their email address on the onboarding screen.

2. Account Verification

If the user does not have an account, the system will initiate account creation.
If the user already has an account, proceed directly to OTP verification.

3. OTP Verification

An OTP is sent to the provided email address via API.
The user enters the OTP in the input field.

4. Successful Login

Upon successful OTP verification, the user is redirected to the /home/dashboard page.

## UI Design Guidelines:
- Centered layout with clean typography.
- Use of subtle transitions and micro-interactions (e.g., loading spinner on OTP send).
- Error and success messages must be clearly visible but not intrusive.
- Responsive design for mobile, tablet, and desktop.
- Avoid clutter; focus on core input and call-to-action elements.