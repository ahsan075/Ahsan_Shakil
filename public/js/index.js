// ===VARIABLES===//

const bar = document.querySelector(".toggle__bar");
const navbar = document.querySelector(".navbar");
const listItem = document.querySelectorAll(".list-item");
const menu = document.querySelector(".contain");
const welcome = document.querySelector(".welcome");
const blink = document.querySelector(".blink");
const welcome1 = document.querySelector(".welcome1");
const welcome2 = document.querySelector(".welcome2");
const section1 = document.querySelector(".main_header");
const about_list = document.querySelectorAll(".about_list li");
const frontend = document.querySelector(".as_frontend");
const backend = document.querySelector(".as_backend");

let result = false;

const arrowClick = document.querySelector(".nav__arrow");
const expend__toggle = document.querySelector(".expend__nav");
const name__active = document.querySelectorAll(".name");

const section = document.querySelectorAll("section");

const scrollspy__div = document.querySelectorAll(
    ".scrollspy__div .scrollspy__head"
);

console.log(scrollspy__div);

// === TOGGOLE BAR CLICKING EVENTS ===//

bar.addEventListener("click", function () {
    menu.classList.toggle("mobile__expend");
});

expend__toggle.addEventListener("click", () => {
    navbar.classList.toggle("expend__list");
    expend__toggle.classList.toggle("expend__rotate");
    name__active.forEach((name) => {
        name.classList.toggle("active");
    });
});

// listItem.forEach((list) => {
//     list.addEventListener("click", function (e) {
//         listItem.forEach((li) => li.classList.remove("active"));
//         list.classList.add("active");
//     });
// });

// card__off

scrollspy__div.forEach((list) => {
    list.addEventListener("click", function (e) {
        scrollspy__div.forEach((li) => {
            let next = li.nextElementSibling;
            li.classList.remove("hover_active");
            next.classList.add("card__off");
            li.parentElement.classList.remove("bar__active");
        });
        list.classList.add("hover_active");
        list.nextElementSibling.classList.remove("card__off");
        list.parentElement.classList.add("bar__active");
    });
});

about_list.forEach((list) => {
    list.addEventListener("click", function (e) {
        about_list.forEach((li) => li.classList.remove("hover_active"));
        list.classList.add("hover_active");
        if (list.className.match("frontend")) {
            frontend.classList.remove("on");
            backend.classList.add("on");
        }
        if (list.className.match("backend")) {
            frontend.classList.add("on");
            backend.classList.remove("on");
        }
    });
});

window.onscroll = () => {
    let top = window.scrollY;

    section.forEach((section) => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let currentId = section.getAttribute("id");

        console.log(currentId);
        console.log(top + " " + offset + " " + height);

        if (top >= offset && top < offset + height) {
            listItem.forEach((li) => li.classList.remove("active"));
            let selector = `.list-item a[href="#${currentId}"]`;
            document
                .querySelector(selector)
                .parentElement.classList.add("active");
        }
        if (top >= 1.6 * height) {
            scrollspy__div.forEach((list) => {
                if (list.classList.contains("hover_active") === true) {
                    list.parentElement.classList.add("bar__active");
                }
            });

            console.log("done");
        } else if (top < offset - 150) {
            scrollspy__div.forEach((list) => {
                list.parentElement.classList.remove("bar__active");
            });
            console.log("not");
        }
    });
};

// === WELCOME ANIMATION ===//
section.forEach((section) => {
    section.style.display = "none";
});

setTimeout(() => {
    welcome.style.width = "0%";
    menu.classList.remove("yes");
    blink.style.display = "none";
    welcome1.style.display = "none";
    welcome2.style.display = "none";
}, 2000);

setTimeout(() => {
    welcome.style.display = "none";
    section.forEach((section) => {
        section.style.display = "flex";
    });
    menu.classList.remove("no");
}, 3000);

window.addEventListener("scroll", function () {
    const window__position = window.scrollY > 0;
    menu.classList.toggle("scroll__active", window__position);
});
