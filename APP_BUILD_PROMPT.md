# Self-contained build prompt — offline Mirror demo

Build a small, self-contained browser demo called **The Mirror**, a deliberately pointless smartphone mirror app. Use vanilla HTML, CSS, and JavaScript with local assets only. It must work without a network connection after being placed on the presentation machine. Do not add analytics, external services, trackers, remote fonts, external images, payment integrations, downloads, or package dependencies.

## Visual direction

Use a premium black-and-white interface with a clear type hierarchy, thin silver dividers, restrained motion, and a realistic phone frame. The app is knowingly over-engineered in presentation while remaining simple to use. Respect reduced-motion preferences; never flash rapidly or play loud audio.

## Required behavior

1. **Silver** is the free default. Show the live front-camera mirror in a deliberately partial-screen window, with the rest of the screen visibly unused.
2. **Gold** expands the camera mirror to full-screen. Show a one-time **₹2,000** upgrade button as mock UI only. It must never charge money or navigate to payment.
3. Show **₹5,000** premium extras in a separate mock bundle. Buttons may display a satirical confirmation, but must not purchase anything.
4. Include the fictional claim of a **25 GB download** and **10 GB of updates every two months** as clearly satirical copy only. Do not download, allocate, or generate large files.
5. A **₹2,000 deletion fee** is a dismissible joke. Make the no-cost exit prominent and usable at all times. Never trap, lock, or obstruct the user from closing the app.
6. Offer a **one-time first-run preview** as the single trial. Do not repeat the trial prompt on every view or store identity data.

## Privacy and fallback

- Request the front camera only after the user deliberately selects “Enable mirror.” Do not request microphone access.
- Display the stream locally with `video.srcObject`; never record, upload, save, or retain video frames or personal data.
- Stop every media track when the preview is switched off, the page is hidden, the app is exited, or the view is closed.
- If permission is denied, the API is unavailable, or no camera is present, show a local illustration and a clear, non-blocking explanation. Keep all app controls usable.
- Camera data must never be written to storage, cookies, caches, or logs.

## Useless Software theme guardrails

No device locking, coercive exit flows, personal-data collection, repeated prompts, rapid flashing, loud audio, real payment, huge downloads, or deliberately disruptive system behavior. Preserve an easy, free exit.

## Acceptance criteria

- Silver and Gold visibly show partial-screen and full-screen camera previews, respectively.
- Camera preview is optional, local, temporary, and has a reliable illustrated fallback.
- Prices, trial, storage, and deletion-fee copy are mock UI only; no network activity or real purchase occurs.
- App runs offline with local assets and no external dependencies.
- Interface is legible in a live presentation and respects reduced motion.
