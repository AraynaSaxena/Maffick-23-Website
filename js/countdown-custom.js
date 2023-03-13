jQuery(document).ready(function () {
  $(function () {
    $("#defaultCountdown").countdown({
      until: new Date("2023-03-04"),
    }); // year, month, date, hour
  });
});

// Targeting video element
let clip = document.querySelector("#artist");

/* Applying mouseover event on video clip 
and then we call play() function to play 
the video when the mouse is over the video */
clip.addEventListener("mouseover", function (e) {
  clip.muted = !clip.muted;
  clip.play();
});

/* Applying mouseout event on video clip 
and then we call pause() function to stop 
the video when the mouse is out the video */
clip.addEventListener("mouseout", function (e) {
  clip.muted = !clip.muted;
  clip.currentTime = 0;
  clip.pause();
});
