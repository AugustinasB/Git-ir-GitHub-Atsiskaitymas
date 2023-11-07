document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    const cardContainer = document.querySelector(".card-container");

    buttons.forEach((button) => {
        button.style.cursor = "pointer";
        button.addEventListener("click", function () {
            cardContainer.style.display = "flex";
        });
    });

    cardContainer.addEventListener("click", function () {
        cardContainer.style.display = "none";
    });

    cardContainer.querySelector(".card").addEventListener("click", function (e) {
        e.stopPropagation();
    });
});
