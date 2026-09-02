const video = document.getElementById('main-video');
const btnPlay = document.getElementById('btn-play');
const btnMute = document.getElementById('btn-mute');

// Alternar entre Play e Pause
btnPlay.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    btnPlay.innerText = '⏸️ Pause';
  } else {
    video.pause();
    btnPlay.innerText = '▶️ Play';
  }
});

// Alternar Áudio (Mutar/Desmutar)
btnMute.addEventListener('click', () => {
  video.muted = !video.muted;
  if (video.muted) {
    btnMute.innerText = '🔊 Desmutar';
  } else {
    btnMute.innerText = '🔇 Mutar';
  }
});
