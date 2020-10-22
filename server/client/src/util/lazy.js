const images = document.querySelectorAll("img.lazy");
const scrollTop = window.pageYOffset;
const windowHeight = window.innerHeight;

const throttleTimeout = setTimeout(() => {
  images.forEach((image) => {
    console.log(image);
    if (image.offsetTop < windowHeight + scrollTop) {
      image.srcset = image.dataset.src;
      image.classList.remove("lazy");
    }
  });
}, 300);

const load = () => {
  console.log("lazy", throttleTimeout);
  if (throttleTimeout) {
    clearTimeout(throttleTimeout);
  }
};

const onContentLoad = () => {
  document.addEventListener("scroll", load);
  window.addEventListener("resize", load);
  window.addEventListener("orientationchange", load);
};

export const lazyLoad = () => {
  document.addEventListener("DOMContentLoaded", onContentLoad);
};
