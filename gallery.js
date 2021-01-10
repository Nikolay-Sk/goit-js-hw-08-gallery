"use strict";
import galleryItems from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const closeLightbox = document.querySelector('[data-action="close-lightbox"]');
const lightBox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

const createMarkup = ({ preview, original, description }) =>
  `<li class="gallery__item">
<a
  class="gallery__link"
  href= ${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`;

const createGalery = (galleryItems) =>
  galleryItems.map((item) => createMarkup(item)).join("");

gallery.insertAdjacentHTML("beforeend", createGalery(galleryItems));

const openImg = (event) => {
  event.preventDefault();
  lightBox.classList.add("is-open");
  lightboxImage.src = event.target.dataset.source;
};

const closeImg = (event) => {
  lightBox.classList.remove("is-open");
  lightboxImage.src = "";
};

const handlingGallery = (event) => {
  if (
    event.target.classList.contains("gallery__image") &&
    !lightBox.classList.contains("is-open")
  ) {
    openImg(event);
  }

  if (
    event.code === "Escape" ||
    event.target.classList.contains("lightbox__content") ||
    (event.target === closeLightbox && lightBox.classList.contains("is-open"))
  ) {
    closeImg(event);
  }
};

document.addEventListener("click", handlingGallery);
document.addEventListener("keydown", handlingGallery);
