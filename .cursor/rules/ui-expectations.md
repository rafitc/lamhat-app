# UI expectations

## User Onboarding Flow
The user onboarding experience should be clean, minimal, and distraction-free. The flow is designed to be fast and user-friendly, without any unnecessary steps or clutter.

## Flow Steps:
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


## Home Page (Dashboard)

The Home Page (or Dashboard) is the landing page that users are redirected to after a successful login. Access to this page is restricted to authenticated users with a valid auth token.

`app/home/page.tsx`

### Page Components & Layout

1. Navbar
Positioned at the top of the page.
Left-aligned: App name with logo.
Right-aligned (desktop view): Navigation links — Home, User Profile.
Mobile view: Navbar should collapse into a hamburger menu (☰) for responsiveness.

2. Library Cards Grid
Display a grid of cards, each representing a Library.
Each card includes:
Thumbnail/Image of the library
Library Name
Edit/Rename Icon
Delete Icon — shows a confirmation alert on click
Publish/Unpublish Icon — toggles and reflects current status visually

3. Add Library Card
If the user has no existing libraries, show an "Add Library" card with a "+" (Add) symbol.

Clicking this card should navigate the user to:

/gallery/page.tsx

### Responsive Behavior


Navbar should be fully responsive:
Collapses into a hamburger menu on mobile.
Menu items can appear in a dropdown or side-drawer format.

## UI Design Guidelines:
- Centered layout with clean typography.
- Use of subtle transitions and micro-interactions (e.g., loading spinner on OTP send).
- Error and success messages must be clearly visible but not intrusive.
- Responsive design for mobile, tablet, and desktop.
- Avoid clutter; focus on core input and call-to-action elements.