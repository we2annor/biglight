const images = document.querySelectorAll("img.lazy");
const scrollTop = window.pageYOffset;
const windowHeight = window.innerHeight;

const throttleTimeout = setTimeout(() => {
  images.forEach((image) => {
    if (image.offsetTop < windowHeight + scrollTop) {
      image.src = image.dataset.src;
      image.classList.remove("lazy");
    }
  });
}, 2000);

const lazy = () => {
  if (throttleTimeout) {
    clearTimeout(throttleTimeout);
  }
};

const onContentLoad = () => {
  document.addEventListener("scroll", lazy);
  window.addEventListener("resize", lazy);
  window.addEventListener("orientationchange", lazy);
};

export const lazyLoad = () => {
  document.addEventListener("DOMContentLoaded", onContentLoad);
};
