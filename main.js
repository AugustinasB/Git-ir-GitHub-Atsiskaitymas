document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");
    const cardText = document.querySelector(".card-text");

    buttons.forEach((button) => {
        button.style.cursor = "pointer";
    });


    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const info = this.getAttribute("data-info");
            cardText.textContent = info;
            const cardContainer = document.getElementById("card");
            cardContainer.style.display = "block";
        });
    });

    const cardContainer = document.getElementById("card");
    cardContainer.addEventListener("click", function () {
        cardContainer.style.display = "none";
    });

    cardContainer.querySelector(".card").addEventListener("click", function (e) {
        e.stopPropagation();
    });
});
