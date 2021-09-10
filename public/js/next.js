const x = window.matchMedia("(max-width: 768px)");
const slider__card = document.querySelectorAll(".slider__card");

const resized = () => {
    if (x.matches) {
        slider__card.forEach((card) => {
            card.classList.remove("topUp");
        });
        console.log("work");
    } else {
        slider__card.forEach((card) => {
            card.classList.add("topUp");
        });
        console.log("ko");
    }
};

window.addEventListener("load", resized);

window.addEventListener("resize", resized);
