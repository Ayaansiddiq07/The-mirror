# The Mirror

A small offline-capable mirror demo for MAD HACKS 2026, Theme 3: Useless Software.

## Run locally

```sh
node server.js
```

Open `http://localhost:8000`. If port 8000 is already in use, run `node server.js 8010` and open `http://localhost:8010`. For phones on the same Wi-Fi, use the computer's current LAN address. Camera access requires HTTPS or localhost. The app renders camera video locally and uses an ambient fallback when access is unavailable.

## Event setup

After deploying to Vercel, put the public URL in `CONFIG.DEPLOY_URL` near the top of the script and replace `qr-code.svg` with a QR for that URL. The share dialog displays the current origin. Replace the four member placeholders in the same config before presenting.

The installer, update, and removal flows are visual jokes. No payment is processed and the demo does not collect personal data or send analytics.
