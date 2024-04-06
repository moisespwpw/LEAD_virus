document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('playButton');
    var videoOverlay = document.getElementById('videoOverlay');
    var video = document.getElementById('prankVideo');
    var closeButton = document.getElementById('closeButton');

    // Hide the video overlay initially
    videoOverlay.style.display = 'none';

    playButton.addEventListener('click', function() {
        // Display the video overlay
        videoOverlay.style.display = 'flex';

        // Play the video
        video.play();
    });

    closeButton.addEventListener('click', function() {
        // Hide the video overlay
        videoOverlay.style.display = 'none';

        // Pause the video
        video.pause();
    });
});
