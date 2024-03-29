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

const progressbar = document.getElementById("progressbar");

let totalHeight = document.body.scrollHeight - window.innerHeight / 1.2;

window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressbar.style.width = progressHeight + "%";

    let top = window.scrollY;

    const skillDiv = document.getElementById("skill");
    const contentPosition = skillDiv.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2.3;
    if (contentPosition < screenPosition) {
        scrollspy__div.forEach((list) => {
            if (list.classList.contains("hover_active") === true) {
                list.parentElement.classList.add("bar__active");
            }
        });
    } else {
        scrollspy__div.forEach((list) => {
            list.parentElement.classList.remove("bar__active");
        });
    }

    section.forEach((section) => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let currentId = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            listItem.forEach((li) => li.classList.remove("active"));
            let selector = `.list-item a[href="#${currentId}"]`;
            document
                .querySelector(selector)
                .parentElement.classList.add("active");
        }
    });
};

// === WELCOME ANIMATION ===//
section.forEach((section) => {
    section.style.display = "none";
});

const body = document.querySelector("body");

setTimeout(() => {
    welcome.style.width = "0%";
    menu.classList.remove("yes");
    blink.style.display = "none";
    welcome1.style.display = "none";
    welcome2.style.display = "none";
}, 2000);

setTimeout(() => {
    welcome.style.display = "none";
    body.classList.remove("none");
    section.forEach((section) => {
        section.style.display = "flex";
    });
    menu.classList.remove("no");
}, 3000);

window.addEventListener("scroll", function () {
    const window__position = window.scrollY > 0;
    menu.classList.toggle("scroll__active", window__position);
});

// Changing

// localStorage

if (localStorage.PushDiv === undefined) {
    localStorage.setItem(
        "PushDiv",
        JSON.stringify({ id: "1", name: "normal" })
    );
} else {
    addToLocalStorage();
}

function getDataFromLocalStorage() {
    return localStorage.getItem("PushDiv")
        ? JSON.parse(localStorage.getItem("PushDiv"))
        : [];
}

function getDataFromLocalStorage2() {
    return localStorage.getItem("threeBtn")
        ? JSON.parse(localStorage.getItem("threeBtn"))
        : [];
}

function addToLocalStorage() {
    const items = getDataFromLocalStorage();
    localStorage.setItem("PushDiv", JSON.stringify(items));
}

// end local storage

const black = document.querySelector(".blackBtn");
const white = document.querySelector(".whiteBtn");

function blackStyle() {
    document.documentElement.style.cssText = `--bg-color: #0f141e;
    --text-color: #fff;
    --outer-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
        2px 2px 6px rgba(0, 0, 0, 0.8);
    --inner-shadow: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
        inset 2px 2px 6px rgba(0, 0, 0, 0.1);
    --button-shadow: -1px -1px 3px rgba(255, 255, 255, 0.1),
        2px 2px 6px rgba(0, 0, 0, 0.8);
    --button-active: inset -1px -1px 3px rgba(255, 255, 255, 0.1),
        inset 2px 2px 6px rgba(0, 0, 0, 0.1);
    --first-font: "Fira Sans", sans-serif;
    --second-font: "Azeret Mono", monospace;
    --third-font: "Roboto", sans-serif;

    --logo-color: #fff;
    --list-bg-color: #f2f3f7;

    --home-anchr-color: #141f43;
    --home-anchr-hover-color: #04aa6d;
    --common-color: rgb(209, 203, 203);
    --toggole-color: #fff;
    --about-color: #0f141e;
    --fd-color: #0f141e;
    --skill-color: #fff;
    --skill-sub-color: rgb(213, 205, 205);
    --scrollspy-div-inner: rgb(211, 208, 208);
    --scrollspy-shadow: var(--button-shadow);
    --design-color: #0084f0;
    --tools-color: #226eda;
    --jquery-color: #475e79;
    --photoshop-color: #035faa;
    --chose-one-color: #f2f3f7;`;
}

black.addEventListener("click", function () {
    blackStyle();
    const items = getDataFromLocalStorage();
    items.name = "black";
    localStorage.setItem("PushDiv", JSON.stringify(items));

    body.classList.add("black");
    body.classList.remove("white");
    black.classList.add("change__btn__active");
    white.classList.remove("change__btn__active");
    body.classList.remove("normal");
    purpleBtn.classList.remove("change__btn__active");
    greenBtn.classList.remove("change__btn__active");
    blueBtn.classList.remove("change__btn__active");
});

function whiteStyle() {
    document.documentElement.style.cssText = `--bg-color: #eff0f4;
    --text-color: #141f43;
    --outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
    --inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;
    --button-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15);
    --button-active: inset -2px -2px 8px rgba(255, 255, 255, 1),
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    --logo-color: #0f141e;
    --list-bg-color: #f2f3f7;
    --home-anchr-color: #fff;
    --home-anchr-hover-color: #141f43;
    --common-color: #878a8f;
    --toggole-color: #141f43;
    --about-color: #141f43;
    --about-sub-color: #878a8f;
    --fd-color: #141f43;
    --skill-color: var(--about-color);
    --skill-sub-color: var(--about-sub-color);
    --scrollspy-div-inner: rgb(201, 198, 198);
    --scrollspy-shadow: var(--button-active);
    --design-color: #001d34;
    --tools-color: #1254b2;
    --jquery-color: #0b131c;
    --photoshop-color: #001d34;
    --chose-one-color: #141F43;`;
}

white.addEventListener("click", function () {
    document.documentElement.style.cssText = `
    --bg-color: #eff0f4;
    --text-color: #141f43;
    --outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
    --inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;
    --button-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15);
    --button-active: inset -2px -2px 8px rgba(255, 255, 255, 1),
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    --logo-color: #0f141e;
    --list-bg-color: #f2f3f7;
    --home-anchr-color: #fff;
    --home-anchr-hover-color: #141f43;
    --common-color: #878a8f;
    --toggole-color: #141f43;
    --about-color: #141f43;
    --about-sub-color: #878a8f;
    --fd-color: #141f43;
    --skill-color: var(--about-color);
    --skill-sub-color: var(--about-sub-color);
    --scrollspy-div-inner: rgb(201, 198, 198);
    --scrollspy-shadow: var(--button-active);
    --design-color: #001d34;
    --tools-color: #1254b2;
    --jquery-color: #0b131c;
    --photoshop-color: #001d34;
    --chose-one-color: #141F43;`;
    // whiteStyle();
    const items = getDataFromLocalStorage();
    items.name = "white";
    localStorage.setItem("PushDiv", JSON.stringify(items));

    body.classList.remove("black");
    body.classList.add("white");
    black.classList.remove("change__btn__active");
    white.classList.add("change__btn__active");
    body.classList.remove("normal");
    purpleBtn.classList.remove("change__btn__active");
    greenBtn.classList.remove("change__btn__active");
    blueBtn.classList.remove("change__btn__active");
});

const changing__btns = document.querySelector(".changing__btns ");

changing__btns.addEventListener("click", function () {
    changing__btns.classList.toggle("newright");
});

function normalAll() {
    document.documentElement.style.cssText = `
    --first-color: #878a8f;
    --second-color: #0f141e;
    --about-bg: #f2f3f7;
    --new-bg: linear-gradient(to bottom, #eff0f4, #fff);
    --first-font: "Fira Sans", sans-serif;
    --second-font: "Azeret Mono", monospace;
    --third-font: "Roboto", sans-serif;
    --welcome-color: #0f141e;
    --loader-color: #fff;
    --logo--before-color: #fff;
    --list-content-color: #0f141e;
    --list-color: #141f43;

    --bg-color: #eff0f4;
    --text-color: #141f43;
    --outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
    --inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;
    --button-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15);
    --button-active: inset -2px -2px 8px rgba(255, 255, 255, 1),
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    --logo-color: #0f141e;
    --list-bg-color: #f2f3f7;
    --home-anchr-color: #fff;
    --home-anchr-hover-color: #141f43;
    --common-color: #878a8f;
    --toggole-color: #141f43;
    --about-color: #141f43;
    --about-sub-color: #878a8f;
    --fd-color: #141f43;
    --skill-color: var(--about-color);
    --skill-sub-color: var(--about-sub-color);
    --scrollspy-div-inner: rgb(201, 198, 198);
    --scrollspy-shadow: var(--button-active);
    --design-color: #001d34;
    --tools-color: #1254b2;
    --jquery-color: #0b131c;
    --photoshop-color: #001d34;
    --normal-common-color: #6b59d1;
    --normal-second-color: #5648bf;
    --normal-scroll-shadow: #6b59d181;
    --normal-detail-card: #6b59d1e7;
    --normal-edu-card: #6b59d1e7;
    --normal-contact-bottom: #6b59d18f;
    --normal-span-color: #6b59d17c;
    --normal-inactive: #6b59d183;
    --chose-one-color: #6b59d1;
    `;
    body.classList.remove("black");
    body.classList.remove("white");
    body.classList.add("normal");
    const items = getDataFromLocalStorage();
    items.name = "normal";
    localStorage.setItem("PushDiv", JSON.stringify(items));
}

const blueBtn = document.querySelector(".blueBtn ");
const greenBtn = document.querySelector(".greenBtn ");
const purpleBtn = document.querySelector(".purpleBtn ");

if (localStorage.threeBtn === undefined) {
    localStorage.setItem(
        "threeBtn",
        JSON.stringify({ id: "1", name: "purple" })
    );
} else {
    addToLocalStorage();
}

blueBtn.addEventListener("click", function () {
    normalAll();
    document.documentElement.style.cssText = `
    --normal-common-color: #2d73d4;
    --normal-second-color: #1254b2;
    --normal-scroll-shadow: #2d72d4a8;
    --normal-detail-card: #2d72d4e7;
    --normal-edu-card: #2d72d4e7;
    --normal-contact-bottom: #2d72d486;
    --normal-span-color: #2d72d471;
    --normal-inactive: #2d72d471;
    --chose-one-color: #2d73d4;`;
    purpleBtn.classList.remove("change__btn__active");
    greenBtn.classList.remove("change__btn__active");
    blueBtn.classList.add("change__btn__active");
    black.classList.remove("change__btn__active");
    white.classList.remove("change__btn__active");
    const items = getDataFromLocalStorage2();
    items.name = "blue";
    localStorage.setItem("threeBtn", JSON.stringify(items));
});

greenBtn.addEventListener("click", function () {
    normalAll();

    document.documentElement.style.cssText = ` 
    --normal-common-color: #13ae87;
    --normal-second-color: #0e9775;
    --normal-scroll-shadow: #13ae87a6;
    --normal-detail-card: #13ae87de;
    --normal-edu-card:#13ae87de;
    --normal-contact-bottom: #13ae879a;
    --normal-span-color: #13ae8779;
    --normal-inactive: #13ae8779;
    --chose-one-color:  #13ae87;`;
    greenBtn.classList.remove("change__btn__active");
    purpleBtn.classList.remove("change__btn__active");
    greenBtn.classList.add("change__btn__active");
    blueBtn.classList.remove("change__btn__active");
    black.classList.remove("change__btn__active");
    white.classList.remove("change__btn__active");
    const items = getDataFromLocalStorage2();
    items.name = "green";
    localStorage.setItem("threeBtn", JSON.stringify(items));
});

purpleBtn.addEventListener("click", function () {
    normalAll();

    document.documentElement.style.cssText = ` 
    --normal-common-color: #6b59d1;
    --normal-second-color: #5648bf;
    --normal-scroll-shadow: #6b59d181;
    --normal-detail-card: #6b59d1e7;
    --normal-edu-card: #6b59d1e7;
    --normal-contact-bottom: #6b59d18f;
    --normal-span-color: #817d9980;
    --normal-inactive: #6b59d183;
    --chose-one-color: #6b59d1;`;
    purpleBtn.classList.add("change__btn__active");
    greenBtn.classList.remove("change__btn__active");
    blueBtn.classList.remove("change__btn__active");
    black.classList.remove("change__btn__active");
    white.classList.remove("change__btn__active");
    const items = getDataFromLocalStorage2();
    items.name = "purple";
    localStorage.setItem("threeBtn", JSON.stringify(items));
});

let names = JSON.parse(localStorage.PushDiv).name;
console.log(names);

let colors = JSON.parse(localStorage.threeBtn).name;
console.log(colors);

body.classList.remove("white");
body.classList.remove("normal");
body.classList.remove("black");
body.classList.add(names);

if (body.classList.contains("black")) {
    blackStyle();
}

if (body.classList.contains("white")) {
    whiteStyle();
}

if (body.classList.contains("white") || body.classList.contains("black")) {
    if (body.classList.contains("white")) {
        white.classList.add("change__btn__active");
    }
    if (body.classList.contains("black")) {
        black.classList.add("change__btn__active");
    }
}

if (body.classList.contains("normal")) {
    body.classList.remove("blue");
    body.classList.remove("green");
    body.classList.remove("purple");
    body.classList.add(colors);

    if (body.classList.contains("blue")) {
        document.documentElement.style.cssText = `
        --normal-common-color: #2d73d4;
        --normal-second-color: #1254b2;
        --normal-scroll-shadow: #2d72d4a8;
        --normal-detail-card: #2d72d4e7;
        --normal-edu-card: #2d72d4e7;
        --normal-contact-bottom: #2d72d486;
        --normal-span-color: #2d72d471;
        --normal-inactive: #2d72d471;
        --chose-one-color: #2d73d4;`;
        blueBtn.classList.add("change__btn__active");
    }
    if (body.classList.contains("green")) {
        document.documentElement.style.cssText = ` 
        --normal-common-color: #13ae87;
        --normal-second-color: #0e9775;
        --normal-scroll-shadow: #13ae87a6;
        --normal-detail-card: #13ae87de;
        --normal-edu-card:#13ae87de;
        --normal-contact-bottom: #13ae879a;
        --normal-span-color: #13ae8779;
        --normal-inactive: #13ae8779;
        --chose-one-color:  #13ae87;`;
        greenBtn.classList.add("change__btn__active");
    }
    if (body.classList.contains("purple")) {
        document.documentElement.style.cssText = ` 
        --normal-common-color: #6b59d1;
        --normal-second-color: #5648bf;
        --normal-scroll-shadow: #6b59d181;
        --normal-detail-card: #6b59d1e7;
        --normal-edu-card: #6b59d1e7;
        --normal-contact-bottom: #6b59d18f;
        --normal-span-color: #817d9980;
        --normal-inactive: #6b59d183;
        --chose-one-color: #6b59d1;`;
        purpleBtn.classList.add("change__btn__active");
    }
} else {
    body.classList.remove("blue");
    body.classList.remove("green");
    body.classList.remove("purple");
}
