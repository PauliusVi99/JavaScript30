window.addEventListener('keydown', function (e) {
  const audio = document.querySelector(`audio[data-key='${e.key}']`);
  audio.currentTime = 0;
  audio.play();
});
