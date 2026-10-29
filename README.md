# The Mirror

A small offline-capable mirror demo for MAD HACKS 2026, Theme 3: Useless Software.

## Run locally

```sh
node server.js
```

Open `http://localhost:8000`. If port 8000 is already in use, run `node server.js 8010` and open `http://localhost:8010`. For phones on the same Wi-Fi, use the computer's current LAN address. Camera access requires HTTPS or localhost. The app renders camera video locally and uses an ambient fallback when access is unavailable.

## Event setup

After deploying to Vercel, put the public URL in `CONFIG.DEPLOY_URL` near the top of the script and replace `qr-code.svg` with a QR for that URL. The share dialog displays the current origin. Replace the four member placeholders in the same config before presenting.

## Install on a phone

After the HTTPS Vercel deployment is live, tap **Install The Mirror** on the launch screen. Android and desktop browsers that support PWA prompts open the native install prompt. On iPhone or iPad, open the site in Safari, tap **Share → Add to Home Screen → Add**. The service worker caches the app shell for offline reopening.

The demo opens with a theatrical $500 checkout before the simulated download. Clicking Pay advances the joke; it requests no details and charges $0. Deletion carries the same pretend $500 fee, including a $499 overacting surcharge, with a free Keep option. Silver shows the full reflection; Gold adds a gold rim and one extra photon. A Kudla joke appears over the reflection when the Mirror opens; the Kudla button cycles more jokes about the product, its Pumpwell ETA, Hampankatta pricing, and monsoon-proofing. The demo does not collect personal data or send analytics.
