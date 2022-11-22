'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbnail = document.querySelector('.thumbnail');
  const videotime = document.querySelector('.video-time');
  const originaltext = videotime.innerHTML;

  thumbnail.addEventListener('mouseover', function () {
    videotime.innerHTML = 'Keep hovering to play';
  });

  thumbnail.addEventListener('mouseleave', function () {
    videotime.innerHTML = originaltext;
  });
});
