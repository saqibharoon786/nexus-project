# Scroll-based services showcase

## What will be built
- Keep the current black, white, and electric-purple visual identity.
- Turn the opening area into a scroll-driven sequence with seven distinct service scenes:
  1. Medical Billing
  2. Fast Food Solutions
  3. Lead Management
  4. Patient Screening
  5. X-Ray Services
  6. Ultrasound Services
  7. Doctor–Patient Appointments
- As the visitor scrolls, the current service will move upward while the next rises smoothly from below.
- Give every service its own recognizable icon, short headline, supporting line, service number, and subtle visual motif while preserving one cohesive style.
- Keep navigation visible and include a clear action button in the sequence.

## Interaction and accessibility
- Use a sticky viewport with layered service scenes driven by scroll position.
- Add restrained transitions for text, icons, and backgrounds without affecting readability.
- Respect reduced-motion settings by showing a simpler stacked version.
- Adapt the experience for phones so text and controls remain clear and do not overlap.

## Technical details
- Build the sequence with React and CSS using the existing icon library; no new service or database is needed.
- Extend the existing semantic color and motion tokens rather than adding one-off styling.
- Verify the completed sequence at desktop and mobile sizes, including scroll behavior and browser errors.
