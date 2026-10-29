# Changes

## What changed

- Replaced the 60-second walkthrough with a 3-minute manual-first keynote, keyboard/swipe navigation, hidden speaker notes (`N`), visible elapsed time, and cancellable auto-play.
- Added a skippable simulated installer with a hard 18-second cap, ETA joke, and a final readout of the saved HTML byte count and 0 B reserved space.
- Reduced headline editions to Silver and Gold. Silver shows a 45% aperture and a Gold panel; Gold fills the mirror viewport.
- Added in-memory two-month updates (+1 minor version, +10 GB) and an update history sheet.
- Reused the existing billing and goodbye screens for the three-step removal flow. Payment is cosmetic.
- Added event configuration, product-targeted copy, inline icons/plain labels, and a shared audio gain/compressor path. Disabled system speech output.
- Matched the package, visible release, and service-worker cache at v4.2.2; precached the QR asset and retained activation-time eviction of older caches.
- Removed the stale LAN IP, replaced the old QR with a marked deployment placeholder, and made the share dialog display `location.origin`.
- Rewrote README and added this change log and a 3-minute speaker script.
- Added an optional port argument to the local server because port 8000 is reserved in the current environment; default remains 8000.

## Verification

- Browser runs covered 390×844 and 1440×900 layouts, Silver/Gold, updates, removal, installer skip and 18-second completion, camera fallback and fake-camera video, the 3-minute keynote timer, and offline reload. The fake-camera run had zero console errors or warnings; the denied-camera run produced its expected permission warning.
- Final static checks passed: inline JavaScript parsed, `node --check server.js` passed, the embedded installer size matched the 136,398-byte HTML file, release/package/service-worker versions matched at v4.2.2, and targeted privacy/stale-address checks found no issues.
- The last Playwright CLI rerun stalled during launcher startup, so the final keynote-restart autoplay reset was verified by code inspection and static parsing, not a fresh browser run.

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

