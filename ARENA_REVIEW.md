# The Mirror — Arena review

## Result

Quick Arena: 16 agents, four rounds, 91 sub-agent calls, one champion. Champion: `a003` (Evidence first + Outline first + User empathy first). Full winning review: [champion solution](.arena/run-20261028-231032-s977725/r4/r4-m01.a003.solution.md). Full bracket record is in `.arena/run-20261028-231032-s977725/`.

## Judge objections surfaced

1. **What is actually built?** Call this a browser presentation/demo unless there is a separate phone app. Rehearse the illustrated fallback as well as the live camera path.
2. **What happens to camera data?** A permission request can resolve after the presenter has left the demo. The demo now invalidates pending requests and immediately stops any late stream; camera tracks also stop on leaving the demo, hiding the page, or opening the exit dialog. Browser runtime verification is still needed before claiming the behavior was tested.
3. **Are the offers real?** The ₹2,000 Gold price, ₹5,000 extras, 25 GB download, and 10 GB updates every two months are labeled fictional. Buttons do not purchase or download. The extras confirmation now also says it is fictional.
4. **Is the first-run trial implemented?** The one-time preview is an assumption for the separate app build prompt. Do not say the presentation website implements it.
5. **Does it follow the Useless Software safety rules?** It has no device lock, personal-data collection, rapid flashing, or audio. Keep the opening motion gentle and silent; retain the dismissible deletion-fee joke and free exit.
6. **Does the pitch fit?** Keep the 30-second silent opening and rehearse slide transitions against the provided three-minute script. Trim the feature list first if delivery runs long.

## Recommended pitch answer

“We built a browser demo of a front-camera mirror with Silver and Gold modes. It is useless because your phone already has the camera and screen to do the same thing; we simply sell the empty space as a premium upgrade.”

The script now states the privacy line during the live demo, the fictional pricing and download disclaimer during pricing, and the browser-demo/uselessness explanation in the close. That keeps the ending from repeating every disclaimer.
