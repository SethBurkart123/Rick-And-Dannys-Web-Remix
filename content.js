const dannyDevito =
  [
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito2.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito3.jpg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito4.avif"
  ]
rickRoll = "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/nevergonnagiveyouup.mp4";

const changeImg = () => {
  const imgs = document.querySelectorAll("img");
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
      img.style = 'object-fit: cover !important; visibility: visible;';
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