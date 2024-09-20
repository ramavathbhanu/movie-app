const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  // console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

// Function to play the video
function playVideo() {
  var modal = document.getElementById('videoModal');
  var video = document.getElementById('youtubeVideo');
  
  // Set the YouTube video URL (change the ID to the desired video)
  video.src = "https://www.youtube.com/embed/OaJoTj5tpew";
  
  // Display the modal
  modal.style.display = "block";
}

// Function to close the video modal
function closeVideo() {
  var modal = document.getElementById('videoModal');
  var video = document.getElementById('youtubeVideo');
  
  // Hide the modal
  modal.style.display = "none";
  
  // Stop the video
  video.src = "";
}
