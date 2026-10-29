// Service Worker for The Mirror v4.3.12

const CACHE_NAME = 'the-mirror-v4.3.12';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './qr-code.svg',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './keynote_voiceover.mp3',
  './interaction_voiceover/gold-upgrade.mp3',
  './interaction_voiceover/delete-demo.mp3',
  './interaction_voiceover/field-note-1.mp3',
  './interaction_voiceover/field-note-2.mp3',
  './interaction_voiceover/field-note-3.mp3',
  './interaction_voiceover/field-note-4.mp3',
  './interaction_voiceover/field-note-5.mp3',
  './interaction_voiceover/field-note-6.mp3',
  './interaction_voiceover/field-note-7.mp3',
  './music-clips/light-control.mp3',
  './music-clips/clarity-control.mp3',
  './music-clips/zoom-control.mp3',
  './music-clips/freeze-control.mp3',
  './music-clips/camera-flip.mp3',
  './music-clips/frame-shape.mp3',
  './music-clips/lab-toggle.mp3',
  './music-clips/silver-return.mp3',
  './music-clips/fog.mp3',
  './music-clips/fly-release.mp3',
  './music-clips/fly-swat.mp3',
  './music-clips/fly-respawn.mp3',
  './music-clips/caliper.mp3',
  './music-clips/deal-mode.mp3',
  './music-clips/disguise.mp3',
  './music-clips/voice-ai.mp3',
  './music-clips/stare-start.mp3',
  './music-clips/stare-25-seconds.mp3',
  './music-clips/stare-end.mp3',
  './music-clips/true-view.mp3',
  './music-clips/dial-up.mp3',
  './music-clips/thermal.mp3',
  './music-clips/battery-low.mp3',
  './music-clips/battery-charged.mp3',
  './music-clips/vanish.mp3',
  './music-clips/wobbly.mp3',
  './music-clips/hype.mp3',
  './music-clips/glass-crack.mp3',
  './music-clips/glass-repair.mp3',
  './music-clips/quantum-dust.mp3',
  './music-clips/keynote-quote-01.mp3',
  './music-clips/keynote-quote-02.mp3',
  './music-clips/keynote-quote-03.mp3',
  './music-clips/keynote-quote-04.mp3',
  './music-clips/keynote-quote-05.mp3',
  './music-clips/keynote-quote-06.mp3',
  './music-clips/keynote-quote-07.mp3',
  './music-clips/keynote-quote-08.mp3',
  './music-clips/keynote-quote-09.mp3',
  './music-clips/keynote-quote-10.mp3',
  './music-clips/keynote-quote-11.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return networkResponse;
      });
    })
  );
});
