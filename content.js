const dannyDevito =
  [
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito2.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito3.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/devito4.avif"
  ]
rickRoll = "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/nevergonnagiveyouup.mp4";
//rickRollYoutube = "blob:https://www.youtube.com/76f6d70c-8305-4bda-b3a6-1f6581852bbc";

const changeImg = () => {
  const imgs = document.querySelectorAll("img");
  const images = document.querySelectorAll("image");
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    console.log(video);
    if (video.src != rickRoll) {
      video.src = rickRoll;
    }
  });

  imgs.forEach((img) => {
    if (!dannyDevito.includes(img.src)) {
      img.src = dannyDevito[Math.floor(Math.random()*dannyDevito.length)];
      img.srcset = "";
      img.style = 'object-fit: cover !important;';
    }
  });

  images.forEach((img) => {
    if (!dannyDevito.includes(img.src)) {
      img.src = dannyDevito[Math.floor(Math.random()*dannyDevito.length)];
      img.style = 'object-fit: cover !important;';
    }
  });
};

// Function to observe DOM changes
const observeDOM = () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        changeImg();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

changeImg();
observeDOM();

window.addEventListener('locationchange', changeImg);