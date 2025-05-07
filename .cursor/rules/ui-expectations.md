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

## Gallery Page

The **Gallery Page** is where users can view, edit, and manage the photos inside a selected library (gallery). It maintains the same layout and styling consistency as the rest of the application and provides a clean interface to organize up to 20 photos per gallery.

## Source File

```ts
app/gallery/page.tsx
```
### Page Structure & Components
1. Header
Reuse the same Navbar component as on the Home page.

Must remain consistent in design and responsiveness (App name with logo on the left, navigation links or hamburger menu on the right).

2. Gallery Title
Display the title of the selected gallery at the top.

The title should be editable inline or via a small edit icon (🖉).

Validation: Title cannot be empty; auto-save or confirm on blur.

3. Photo Grid (Max 20)
Display existing photos in a grid layout.

Each photo card includes:

Image preview

Delete icon to remove the photo from the gallery

Optional caption or title editing (if needed)

4. Add Photo
Include an “Add Photo” button or card to upload new images.

Enforce a maximum of 20 photos per gallery.

Uploaded photos should appear immediately in the grid, preserving insertion order.

Consider drag-and-drop support for better UX.

5. Footer Actions
A “Save Gallery” button to persist all changes:

Gallery title

Added or deleted photos

A Publish/Unpublish toggle icon:

Reflects the gallery’s current visibility status

API call triggered on toggle action

📱 Responsive Behavior
Gallery grid and action buttons must scale properly across all screen sizes.

Use a column-based layout:

1-column on mobile

3–4 columns on desktop

🧑‍💻 Developer Notes
Max photo limit (20) should be enforced both on the frontend and in backend validation.