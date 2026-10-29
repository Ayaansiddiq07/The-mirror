# Changes

## What changed

- Replaced the 60-second walkthrough with a 3-minute manual-first keynote, keyboard/swipe navigation, hidden speaker notes (`N`), visible elapsed time, and cancellable auto-play.
- Added a theatrical $500 demo checkout before the fake 25 GB download. It collects no card data and charges $0; the simulated download remains skippable and capped at 18 seconds.
- Fixed Silver to show the full reflection in every frame. Gold keeps the same view with a champagne rim and an extra-photon badge.
- Added rotating Kudla Field Notes with dry product jokes about Pumpwell, monsoon humidity, and Hampankatta pricing.
- Added in-memory two-month updates (+1 minor version, +10 GB) and an update history sheet that preserves v4.3 / 25 GB as the baseline.
- Reused the existing billing and goodbye screens for the three-step removal flow. Payment is cosmetic.
- Added event configuration, product-targeted copy, inline icons/plain labels, and a shared audio gain/compressor path. Disabled system speech output.
- Made deletion require a clearly marked $500 demo payment, including a $499 overacting surcharge; the confirmation charges $0 and takes no payment data.
- Fixed the Silver live reflection to fill its aperture, and made the aperture shrink on short phones while the extra Lab dock is open so it cannot collide with controls.
- The first Kudla joke now appears as a subtitle over the reflection as the Mirror opens; the Kudla button advances the same caption through the remaining lines.
- Reflowed the fixed timer/ego/billing group below the header at medium-wide desktop widths to eliminate the collision visible in the screenshot; it remains hidden on compact and short screens.
- Moved keynote navigation into a fixed bottom bar outside the slide, reserved space for it, and enabled internal scrolling on dense slides so slide actions cannot collide with navigation on portrait screens.
- Removed the visible team placeholders and long privacy/tool credits from the keynote closing slide; the short closing title stays clean.
- Added `KEYNOTE_VOICEOVER.md` with timed narration and a configurable voice-over play button. The button stays hidden until a generated audio asset is supplied; playback uses the shared gain/compressor path.
- Matched the package, visible release, and service-worker cache at v4.3.8; precached the QR asset and retained activation-time eviction of older caches.
- Reworked the Kudla jokes to target the product and its pricing, using six local references across Pumpwell, monsoon humidity, Hampankatta, Kudla, Bearys Institute, and MAD HACKS.
- Gold now opens a $500 demo invoice and stays Silver until the demo confirmation is clicked. The prompt and post-upgrade reflection caption include the Hindi/Hinglish dev-team joke; actual charge remains $0 with no card fields.
- Added `INTERACTION_VOICEOVER.md` with a single-track ElevenLabs script for the Gold upgrade, delete prompt, and all seven Kudla captions, separated by cut-friendly silence cues.
- Matched the package, About panel, and service-worker cache at v4.3.9.
- Removed the stale LAN IP, replaced the old QR with a marked deployment placeholder, and made the share dialog display `location.origin`.
- Rewrote README and added this change log and a 3-minute speaker script.
- Added an optional port argument to the local server because port 8000 is reserved in the current environment; default remains 8000.

## Verification

- Playwright verified the $500 demo checkout and skippable fake download, full-frame Silver video (`clip-path: none`), Gold return path, $500 delete gag with a $0 charge and free Keep action, and the two-month update transition.
- An 11-size active-screen sweep from 320×480 to 1800×900 found no horizontal overflow, status/header collisions, header/right-control collisions, or mirror/dock collisions. In the supplied 1534×1050 layout, the status pills sit below the header. At 320×480 with the Lab open, the mirror aperture scales to 180 px with a 20 px gap above the dock.
- At 320×568, the install guide stays inside the viewport and its close button is visible; its content scrolls internally. The delete modal fits without scrolling and has the free Keep action visible.
- A 70-case Playwright check covering all seven slides at ten portrait, landscape, tablet, and desktop sizes found no slide/control overlap; action buttons stayed in-frame and navigation stayed within the viewport. The closing slide has since been reduced to its title, with the full narration moved to `KEYNOTE_VOICEOVER.md`.
- At 466×605, the final slide displays only its title; member placeholders and long credits are absent. With no audio file configured, the voice-over button is hidden and the keynote runs silently.
- Simulated the voice-over button as visible at nine sizes from 320×480 to 1440×900; the control bar stays within the viewport without horizontal overflow. Actual playback awaits the generated audio file.
- Offline reload returned The Mirror from the service-worker cache. The browser reported the standalone manifest, one active service worker, and only the v4.3.8 cache.
- Playwright verified the opening Kudla subtitle appears inside the reflection viewport, then the Kudla button advances to the next line.
- Browser run covered launch, Silver/Gold switch, and delete/Keep: zero console errors or uncaught runtime errors; one expected camera-permission warning because the test browser did not grant camera access.
- Static checks passed: inline JavaScript parsed, `node --check server.js` passed, JSON parsed, installer byte count matched the 147,478-byte HTML file, release/package/service-worker versions matched at v4.3.8, no personal-data inputs or external URLs were found, and no infinite animation runs below 0.33 seconds.

## Local references used

- Pumpwell: traffic and installer ETA jokes.
- Monsoon humidity: fog test joke.
- Hampankatta: pricing and cancellation-policy jokes.
- Kudla: local calibration and footer references.
- Bearys Institute and MAD HACKS 2026: About panel.

## Noticed, not touched

- `app.js` is present but the page uses its inline script; it remains unchanged.
- `.arena/`, `ARENA_REVIEW.md`, `APP_BUILD_PROMPT.md`, `PITCH_SCRIPT.md`, and `VIDEO_STORYBOARD.md` are existing support artifacts outside this implementation.
- The mirror screen still contains optional experimental controls beyond the two headline editions.
- The generated voice-over asset is pending. Add it at `assets/keynote-voiceover.mp3` and set `CONFIG.VOICEOVER_URL` to `./assets/keynote-voiceover.mp3` to enable the play control.
- The live Vercel URL and four member names were not supplied. `CONFIG.DEPLOY_URL` and `CONFIG.MEMBERS` are editable placeholders; regenerate `qr-code.svg` after deployment.

