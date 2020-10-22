let images = [];
const scrollTop = window.pageYOffset;

const throttleTimeout = () => {
  setTimeout(timeOut(), 20);
};

const load = () => {
  if (throttleTimeout) {
    clearTimeout(throttleTimeout);
  }
};

const timeOut = () => {
  console.log("ima", images);
  images = document.querySelectorAll("img.lazy");
  images.forEach((img) => {
    if (img.offsetTop < window.innerHeight + scrollTop) {
      img.srcset = img.dataset.src;
      img.classList.remove("lazy");
    }
  });
  if (images.length === 0) {
    document.removeEventListener("scroll", load);
    window.removeEventListener("resize", load);
    window.removeEventListener("orientationChange", load);
  }
};

if ("IntersectionObserver" in window) {
  images = document.querySelectorAll("img.lazy");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let image = entry.target;
        image.srcset = image.dataset.src;
        image.classList.remove("lazy");
        imageObserver.unobserve(image);
      }
    });
  });
  images.forEach((image) => {
    imageObserver.observe(image);
  });
} else {
  throttleTimeout();
}

const onDomLoaded = () => {
  document.addEventListener("scroll", load);
  window.addEventListener("resize", load);
  window.addEventListener("orientationChange", load);
};

export const lazyLoad = () => {
  images = document.querySelectorAll("img.lazy");
  document.addEventListener("DOMContentLoaded", onDomLoaded());
};
