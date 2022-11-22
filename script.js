'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const thumbnailRow = document.querySelectorAll('.thumbnail-row');
  thumbnailRow.forEach((thumbnail) => {
    const videotime = thumbnail.querySelector('.video-time');
    const originaltext = videotime.innerHTML;

    thumbnail.addEventListener('mouseover', function () {
      videotime.innerHTML = 'Keep hovering to play';
    });

    thumbnail.addEventListener('mouseleave', function () {
      videotime.innerHTML = originaltext;
    });
  });
});
