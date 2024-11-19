// YouTube Player API
let player;

// YouTube API function to load the video
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    height: "0", // Hidden player
    width: "0",
    videoId: "dQw4w9WgXcQ", // Replace with your desired YouTube video ID
    playerVars: {
      autoplay: 1, // Auto-play
      loop: 1, // Loop the video
      playlist: "dQw4w9WgXcQ", // Playlist ID for looping
      controls: 0, // Hide controls
      showinfo: 0, // Hide info
      modestbranding: 1, // Minimal YouTube branding
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Start playing the video when the player is ready
function onPlayerReady(event) {
  event.target.setVolume(30); // Set volume (0-100)
  event.target.playVideo();
}

// Hover and click behavior for the menu
const menuItems = document.querySelectorAll(".menu-item");
const description = document.querySelector(".menu-description");
const descriptions = [
  "What's New",
  "Call of Duty: Ghosts",
  "Watch Dogs",
  "Battlefield 4",
  "Infamous: Second Son",
  "Share Factory",
];

menuItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    menuItems.forEach((el) => el.classList.remove("selected"));
    item.classList.add("selected");
    description.textContent = descriptions[index];
  });

  item.addEventListener("click", () => {
    const url = item.getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  });
});
