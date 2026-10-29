# Changes

## What changed

- Replaced the 60-second walkthrough with a 3-minute manual-first keynote, keyboard/swipe navigation, hidden speaker notes (`N`), visible elapsed time, and cancellable auto-play.
- Added a theatrical $500 demo checkout before the fake 25 GB download. It collects no card data and charges $0; the simulated download remains skippable and capped at 18 seconds.
- Fixed Silver to show the full reflection in every frame. Gold keeps the same view with a champagne rim and an extra-photon badge.
- Added the rotating Kudla Field Notes control with dry local jokes about Pumpwell, monsoon weather, neer dosa, Panambur, goli baje, and ferry delays.
- Added in-memory two-month updates (+1 minor version, +10 GB) and an update history sheet that preserves v4.3 / 25 GB as the baseline.
- Reused the existing billing and goodbye screens for the three-step removal flow. Payment is cosmetic.
- Added event configuration, product-targeted copy, inline icons/plain labels, and a shared audio gain/compressor path. Disabled system speech output.
- Made deletion require a clearly marked $500 demo payment, including a $499 overacting surcharge; the confirmation charges $0 and takes no payment data.
- Matched the package, visible release, and service-worker cache at v4.3.1; precached the QR asset and retained activation-time eviction of older caches.
- Removed the stale LAN IP, replaced the old QR with a marked deployment placeholder, and made the share dialog display `location.origin`.
- Rewrote README and added this change log and a 3-minute speaker script.
- Added an optional port argument to the local server because port 8000 is reserved in the current environment; default remains 8000.

## Verification

- Playwright verified the required $500 demo checkout, fake download, full-width Silver video (`clip-path: none`), Gold badge and return path, Kudla field note, $500 delete demo with `$0` actual charge, and the update history transition from v4.3 / 25 GB to v4.4 / 35 GB.
- At 390×844 and 1440×900, the page had no horizontal or vertical overflow. Camera fallback was used without granting camera access; the only browser warning was the expected camera-denied warning.
- Static checks passed: inline JavaScript parsed, `node --check server.js` passed, the installer byte count matched the 139,811-byte HTML file, release/package/service-worker versions matched at v4.3.1, and targeted privacy/stale-address checks found no issues.

## Local references used

- Pumpwell signal: installer ETA joke.
- Monsoon humidity: fog test joke.
- Bearys Institute and MAD HACKS 2026: About panel.
- Kudla: keynote footer.

## Noticed, not touched

- `app.js` is present but the page uses its inline script; it remains unchanged.
- `.arena/`, `ARENA_REVIEW.md`, `APP_BUILD_PROMPT.md`, `PITCH_SCRIPT.md`, and `VIDEO_STORYBOARD.md` are existing support artifacts outside this implementation.
- The mirror screen still contains optional experimental controls beyond the two headline editions.
- The live Vercel URL and four member names were not supplied. `CONFIG.DEPLOY_URL` and `CONFIG.MEMBERS` are editable placeholders; regenerate `qr-code.svg` after deployment.

