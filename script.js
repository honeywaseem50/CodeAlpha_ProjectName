const galleryItems = document.querySelectorAll(".gallery-item");
const images = document.querySelectorAll(".gallery-item img");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("closeBtn");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

const filterButtons = document.querySelectorAll(".filter-btn");

let currentIndex = 0;


/* =========================
   OPEN LIGHTBOX
========================= */

images.forEach((image, index) => {

    image.addEventListener("click", function () {

        currentIndex = index;

        showImage();

        lightbox.classList.add("show");

    });

});


/* =========================
   SHOW IMAGE
========================= */

function showImage() {

    lightboxImage.src = images[currentIndex].src;

    lightboxImage.alt = images[currentIndex].alt;

}


/* =========================
   NEXT IMAGE
========================= */

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
}


/* =========================
   PREVIOUS IMAGE
========================= */

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
}


/* =========================
   BUTTON EVENTS
========================= */

 nextBtn.addEventListener("click", function () {

    nextImage();

    lightbox.classList.add("show");

});


prevBtn.addEventListener("click", function () {

    previousImage();

    lightbox.classList.add("show");

});


lightboxNext.addEventListener("click", nextImage);

lightboxPrev.addEventListener("click", previousImage);


/* =========================
   CLOSE LIGHTBOX
========================= */

closeBtn.addEventListener("click", function () {

    lightbox.classList.remove("show");

});


/* =========================
   CLOSE WHEN CLICK OUTSIDE
========================= */

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});


/* =========================
   KEYBOARD NAVIGATION
========================= */

document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "ArrowRight") {

        nextImage();

    }

    if (event.key === "ArrowLeft") {

        previousImage();

    }

    if (event.key === "Escape") {

        lightbox.classList.remove("show");

    }

});


/* =========================
   CATEGORY FILTER
========================= */

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        const category = button.dataset.category;


        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        galleryItems.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});