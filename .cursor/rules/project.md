# Lamhat – Digital Photo Frame
## Project Description
Lamhat is a digital photo frame application that allows users to display curated photo memories seamlessly. The goal is to transform any screen into a connected photo frame that updates in real-time with personal or shared photos. The platform supports uploading, organizing, and displaying photos through a clean, minimal UI with multi-user capabilities.

The app is being built with a strong focus on:
- Aesthetics (minimal, clutter-free UI)
- Performance (snappy transitions, image optimization)
- Scalability (modular architecture)
- Maintainability (well-documented, reusable components)

## Code Conventions

- Reusable, stateless components
- Prefer composition over inheritance
- Strong typing with TypeScript
- All components and hooks are documented
- Avoid prop drilling; prefer context providers where necessary


## High-Level Flow

Photo Upload & Management

- Users can upload photos via a drag-and-drop UI.
- Photos are categorized into albums.

Frame Display Mode

- Users can cast a photo frame to a device (TV, tablet, etc.)

User Profiles and Sharing

- Users can have their own profiles.
- Albums or frames can be shared with other users via public Link.
- Multi-device sync supported.
