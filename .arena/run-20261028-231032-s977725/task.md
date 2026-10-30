# Arena task: judge-proof pitch review for The Mirror

Analyze and improve the concept and three-minute spoken pitch for a Useless Software hackathon. Return a concise, useful review for the team: identify the strongest likely judge objections, explain which ones are genuinely risky, and recommend fixes that keep the satirical premise intact. Include a focused pitch structure with timings and a short, clear answer to “what did you build and why is it useless?” Do not invent judge criteria or assume an unstated competition rubric.

## Product and assignment

The Mirror is a deliberately pointless phone app that provides an ordinary front-camera mirror, then wraps it in absurd premium upgrades and fees. The launch should open as a serious premium product reveal before revealing the joke. The team has four speakers and three minutes total, including a silent 30-second opening film. Pitch flow: opening film (00:00–00:30), product reveal (00:30–01:00), live demo (01:00–01:45), satirical pricing (01:45–02:25), closing (02:25–03:00).

Product/demo details: Silver is a partial-screen mirror; Gold expands to full-screen. Gold is a mock one-time ₹2,000 upgrade; premium extras are mock UI at ₹5,000. A ₹2,000 deletion fee is a dismissible joke; closing must always be free. The claimed 25 GB download and 10 GB updates every two months are fictional satire and must not trigger file downloads or purchases. The camera preview must stay local and temporary, without recording, uploading, or retaining personal data. Provide a camera-denied fallback. Useless Software rules forbid device locking, personal-data collection, rapid flashing, and loud audio. The assumed “one trial” is a one-time first-run preview.

## Current implementation context

Review the pitch concept and spoken script in `C:\Users\ayaan\Documents\ChatGPT\mirror\PITCH_SCRIPT.md`. The presentation site is `C:\Users\ayaan\Documents\ChatGPT\mirror\index.html`; its slide notes contain the pitch, and it includes a 30-second silent opening slot, local camera fallback, Silver/Gold controls, mock pricing, and free-exit joke. The script, storyboard, app prompt, and implementation are in the task workspace. Your job is review and recommendations, not code changes.

## What good looks like

Prioritize realistic judge questions: Is the joke clear without over-explaining? Is the app genuinely built and demoable? Does the technical/privacy explanation increase trust? Are the pricing gags readable and clearly fictional? Is the 30-second cinematic opening worth the share of the time? Can all four speakers and transitions fit three minutes? Does the ending land on a crisp point? Give practical wording or timing changes and a concise final recommended pitch arc. Preserve the monochrome premium tone and the initial serious-to-satirical reveal. State any assumptions. No external research is needed.
