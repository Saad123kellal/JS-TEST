window.onload = initializeGallery;

function initializeGallery() {
    console.log("Gallery initialized");

    const images = document.querySelectorAll("#gallery img");

    images.forEach((img, index) => {
        img.tabIndex = 0;

        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });

        img.addEventListener("focus", () => {
            img.style.border = "2px solid blue";
        });

        img.addEventListener("blur", () => {
            img.style.border = "none";
        });
    });
}
