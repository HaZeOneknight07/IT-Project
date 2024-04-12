// preloader.js
window.addEventListener('load', function () {
  // Hide the preloader after the video has finished loading
  var preloader = document.querySelector('.preloader-container');
  var video = document.getElementById('preloader-video');

  video.addEventListener('loadeddata', function () {
      preloader.classList.add('hide');
  });
});