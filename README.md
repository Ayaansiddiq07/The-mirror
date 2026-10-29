# The Mirror

A small offline-capable mirror demo for MAD HACKS 2026, Theme 3: Useless Software.

## Run locally

```sh
node server.js
```

Open `http://localhost:8000`. If port 8000 is already in use, run `node server.js 8010` and open `http://localhost:8010`. For phones on the same Wi-Fi, use the computer's current LAN address. Camera access requires HTTPS or localhost. The app renders camera video locally and uses an ambient fallback when access is unavailable.

## Event setup

After deploying to Vercel, put the public URL in `CONFIG.DEPLOY_URL` near the top of the script and replace `qr-code.svg` with a QR for that URL. The share dialog displays the current origin. Replace the four member placeholders in the same config before presenting.

The demo opens with a theatrical $500 checkout before the simulated download. Clicking Pay only advances the joke: no card details are requested and $0 is charged. Deletion has a $500 demo fee with a $499 overacting surcharge; again, no payment is processed. Silver shows the full reflection. Gold adds a gold rim and one extra photon, according to marketing. Kudla Field Notes add rotating Mangalorean commentary in the Lab. The demo does not collect personal data or send analytics.
