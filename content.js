const dannyDevito =
  [
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito2.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito3.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito4.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito5.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito6.jpeg",
    "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/devito/devito7.jpeg"
  ]
rickRoll = "https://raw.githubusercontent.com/SethBurkart123/Danidevito/main/content/nevergonnagiveyouup.mp4";

const changeImg = () => {
  const imgs = document.querySelectorAll("img");
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    console.log(video);
    if (video.src != rickRoll) {
      video.src = rickRoll;
      video.play();
    }
  });

  imgs.forEach((img) => {
    if (!dannyDevito.includes(img.src)) {
      img.src = dannyDevito[Math.floor(Math.random()*dannyDevito.length)];
      img.srcset = "";
      let currentStyle = img.getAttribute("style");
      img.style = `object-fit: cover !important; visibility: visible; ${currentStyle}`;
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

setInterval(changeImg, 100);

changeImg();
observeDOM();

window.addEventListener('locationchange', changeImg);