(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const chapters = ['OPENING FILM', 'THE PRODUCT', 'LIVE DEMO', 'THE PRICING', 'THE POINT'];
  const starts = [0, 30, 60, 105, 145];
  const durations = [30, 30, 45, 40, 35];
  let current = 0;
  let toastTimer;
  let cameraStream = null;
  let cameraRequestId = 0;
  let filmStart = performance.now();
  let filmFrame;
  const $ = id => document.getElementById(id);
  const track = $('progressTrack');
  const progressButtons = slides.map((_, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.setAttribute('aria-label', `Go to section ${i + 1}`);
    button.addEventListener('click', () => go(i));
    track.append(button);
    return button;
  });

  function go(index) {
    const next = Math.max(0, Math.min(slides.length - 1, index));
    if (next === current) return;
    slides[current].classList.remove('active');
    current = next;
    slides[current].classList.add('active');
    $('slideNumber').textContent = String(current + 1).padStart(2, '0');
    $('chapterLabel').textContent = chapters[current];
    $('prevButton').disabled = current === 0;
    $('nextButton').disabled = current === slides.length - 1;
    progressButtons.forEach((b, i) => b.classList.toggle('active', i === current));
    progressButtons.forEach((b, i) => b.classList.toggle('passed', i < current));
    if (current === 0) replayFilm();
    if (current !== 2) stopCamera();
    announceSlide();
  }
  function announceSlide() {
    $('stage').setAttribute('aria-label', `Section ${current + 1} of 5: ${chapters[current].toLowerCase()}`);
  }
  function tick() {
    const elapsed = Math.max(0, Math.floor((performance.now() - filmStart) / 1000));
    const overall = starts[current] + (current === 0 ? Math.min(elapsed, 30) : 0);
    const mm = String(Math.floor(overall / 60)).padStart(2, '0');
    const ss = String(overall % 60).padStart(2, '0');
    $('runtime').innerHTML = `${mm}:${ss} <i>/</i> 03:00`;
    if (current === 0) {
      const n = Math.min(30, elapsed);
      $('filmTime').textContent = `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`;
      $('filmProgress').style.width = `${n / 30 * 100}%`;
      const captions = [[0, 'BEFORE THERE WAS GLASS'], [5, 'THEN, POLISHED'], [10, 'THEN, FRAMED'], [15, 'THEN, ENGINEERED'], [20, 'EVERY LAYER, ESSENTIAL*'], [25, 'THE MIRROR']];
      const cap = captions.filter(c => n >= c[0]).at(-1);
      if (cap) $('filmCaption').textContent = cap[1];
      const sceneStarts = [0, 5, 10, 15, 20, 25];
      const sceneIndex = Math.max(0, sceneStarts.filter((start, i) => n >= start && (i === sceneStarts.length - 1 || n < sceneStarts[i + 1])).length - 1);
      document.querySelectorAll('.film-scene').forEach((scene, i) => scene.classList.toggle('active', i === sceneIndex));
      $('filmWindow').classList.toggle('show-rings', sceneIndex === 0);
      if (n === 30) $('filmReplay').style.opacity = '1';
    }
    filmFrame = requestAnimationFrame(tick);
  }
  function replayFilm() {
    filmStart = performance.now();
    $('filmReplay').style.opacity = '';
    document.querySelectorAll('.film-scene').forEach((scene, i) => scene.classList.toggle('active', i === 0));
    $('filmWindow').classList.add('show-rings');
  }
  function toast(message) {
    const el = $('toast');
    el.textContent = message;
    el.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('visible'), 2800);
  }
  function setMode(mode) {
    const gold = mode === 'gold';
    $('demoPhone').classList.toggle('gold', gold);
    $('demoPhone').classList.toggle('silver', !gold);
    $('demoDeviceWrap').classList.toggle('is-gold', gold);
    $('demoDeviceWrap').classList.toggle('is-silver', !gold);
    $('silverButton').classList.toggle('selected', !gold);
    $('goldButton').classList.toggle('selected', gold);
    $('silverButton').setAttribute('aria-pressed', String(!gold));
    $('goldButton').setAttribute('aria-pressed', String(gold));
    $('modeTag').textContent = gold ? 'GOLD · FULL SCREEN' : 'SILVER · WINDOWED';
  }
  async function enableCamera() {
    if (cameraStream) { stopCamera(); return; }
    const requestId = ++cameraRequestId;
    $('cameraButton').disabled = true;
    $('cameraButton').querySelector('b').textContent = 'Waiting for permission…';
    $('cameraMessage').textContent = 'Requesting camera permission…';
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error('Camera access is unavailable in this browser context.');
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
      if (requestId !== cameraRequestId || current !== 2 || document.hidden) {
        stream.getTracks().forEach(track => track.stop());
        return;
      }
      cameraStream = stream;
      $('cameraPreview').srcObject = cameraStream;
      $('demoPhone').classList.add('live');
      $('liveStatus').textContent = 'LIVE';
      $('cameraMessage').textContent = 'Live preview active. Nothing is recorded or saved.';
      $('cameraButton').querySelector('b').textContent = 'Turn off live mirror';
    } catch (error) {
      if (requestId === cameraRequestId && current === 2 && !document.hidden) {
        $('cameraMessage').textContent = 'Camera unavailable or denied. The local demo illustration is the fallback.';
        $('cameraButton').querySelector('b').textContent = 'Try live mirror again';
        toast('No camera needed. Demo fallback remains active.');
      }
    } finally {
      if (requestId === cameraRequestId) $('cameraButton').disabled = false;
    }
  }
  function stopCamera() {
    cameraRequestId++;
    if (cameraStream) cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
    if ($('cameraPreview')) $('cameraPreview').srcObject = null;
    $('demoPhone')?.classList.remove('live');
    if ($('liveStatus')) $('liveStatus').textContent = 'DEMO';
    if ($('cameraButton')) { $('cameraButton').disabled = false; $('cameraButton').querySelector('b').textContent = 'Enable live mirror'; }
    if ($('cameraMessage') && current !== 2) $('cameraMessage').textContent = 'Demo view active. Camera is optional.';
  }

  $('prevButton').addEventListener('click', () => go(current - 1));
  $('nextButton').addEventListener('click', () => go(current + 1));
  $('notesToggle').addEventListener('click', () => {
    const open = $('stage').classList.toggle('notes-open');
    $('notesToggle').setAttribute('aria-pressed', String(open));
  });
  $('fullscreenButton').addEventListener('click', async () => {
    try { if (!document.fullscreenElement) await $('stage').requestFullscreen(); else await document.exitFullscreen(); }
    catch { toast('Use your browser’s fullscreen control.'); }
  });
  $('silverButton').addEventListener('click', () => setMode('silver'));
  $('goldButton').addEventListener('click', () => setMode('gold'));
  $('cameraButton').addEventListener('click', enableCamera);
  $('filmReplay').addEventListener('click', replayFilm);
  $('upgradeButton').addEventListener('click', () => toast('This is satire. No purchase has been made.'));
  $('extrasButton').addEventListener('click', () => toast('Fictional extras: confidence included. No purchase.'));
  const dialog = $('exitDialog');
  function closeDialog() { dialog.classList.remove('open'); dialog.setAttribute('aria-hidden', 'true'); }
  $('exitButton').addEventListener('click', () => { stopCamera(); dialog.classList.add('open'); dialog.setAttribute('aria-hidden', 'false'); $('dismissDialog').focus(); });
  $('dismissDialog').addEventListener('click', closeDialog);
  $('keepAppButton').addEventListener('click', closeDialog);
  $('freeExitButton').addEventListener('click', async () => {
    closeDialog(); stopCamera();
    if (document.fullscreenElement) { try { await document.exitFullscreen(); } catch {} }
    toast('Closed for free. Thank you for reflecting.');
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) closeDialog(); });
  document.addEventListener('keydown', event => {
    if (event.target.matches('button, a, input')) return;
    if (['ArrowRight', ' ', 'PageDown'].includes(event.key)) { event.preventDefault(); go(current + 1); }
    if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); go(current - 1); }
    if (event.key.toLowerCase() === 'n') $('notesToggle').click();
    if (event.key.toLowerCase() === 'f') $('fullscreenButton').click();
    if (event.key === 'Escape') $('stage').classList.remove('notes-open');
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopCamera(); });
  window.addEventListener('beforeunload', stopCamera);
  window.addEventListener('keydown', event => { if (event.key === 'Escape') stopCamera(); });
  setMode('silver');
  progressButtons[0].classList.add('active');
  $('prevButton').disabled = true;
  tick();
})();
