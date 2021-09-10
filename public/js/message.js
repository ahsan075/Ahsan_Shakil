const form = document.getElementById("reg-form");
const name__message = document.querySelector(".name__message");
const email__message = document.querySelector(".email__message");
const success__msg = document.querySelector(".success__msg");
const button__send = document.querySelector(".contacts__btn");
const comments = document.querySelector(".comments");
const contact__form = document.querySelector(".contact__form");

form.addEventListener("submit", registerUser);
window.addEventListener("load", showMessage);

let name__re = document.getElementById("name");
let email__re = document.getElementById("email");
let message__re = document.getElementById("message");

async function registerUser(event) {
    event.preventDefault();
    name__re.removeAttribute(" required");
    email__re.removeAttribute(" required");
    message__re.removeAttribute(" required");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    const result = await fetch("/message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            message,
        }),
    }).then((res) => res.json());

    if (result.status === "ok") {
        success__msg.innerHTML = result.msg;
        comments.innerHTML = result.data;
        reset();
    }
    if (result.status === "errorname") {
        name__message.innerHTML = result.error;
    } else {
        name__message.innerHTML = "";
    }

    if (result.status === "erroremail") {
        email__message.innerHTML = result.error;
    } else {
        email__message.innerHTML = "";
    }

    if (result.status === "errorall") {
        success__msg.innerHTML = result.error;
    }
    showMessage();
}

function reset() {
    name__re.value = "";
    email__re.value = "";
    message__re.value = "";
}

setInterval(() => {
    success__msg.innerHTML = "";
}, 5000);

async function showMessage() {
    const result = await fetch("/api", {
        method: "GET",
    }).then((res) => res.json());

    const allData = await result.data;
    Template(allData);
}

function Template(allData) {
    let template = allData.map((item) => {
        let timeDiff = (new Date() - new Date(item.date)) / 1000;
        console.log(timeDiff);
        let timeName;
        let newTimeDiff;

        if (timeDiff < 60) {
            newTimeDiff = Number.parseInt(timeDiff);
            if (newTimeDiff > 1) {
                timeName = "secs";
            } else {
                timeName = "sec";
            }
        }

        if (timeDiff > 60) {
            newTimeDiff = Number.parseInt(timeDiff / 60);
            if (newTimeDiff > 1) {
                timeName = "mins";
            } else {
                timeName = "min";
            }
        }
        if (timeDiff > 60 * 60) {
            newTimeDiff = Number.parseInt(timeDiff / (60 * 60));
            if (newTimeDiff > 1) {
                timeName = "hours";
            } else {
                timeName = "hour";
            }
        }
        if (timeDiff > 60 * 60 * 24) {
            newTimeDiff = Number.parseInt(timeDiff / (60 * 60 * 24));
            if (newTimeDiff > 1) {
                timeName = "days";
            } else {
                timeName = "day";
            }
        }

        if (timeDiff > 60 * 60 * 24 * 365) {
            newTimeDiff = Number.parseInt(timeDiff / (60 * 60 * 24 * 365));
            if (newTimeDiff > 1) {
                timeName = "years";
            } else {
                timeName = "year";
            }
        }

        return ` <div class="comment__div">
        <div class="comment__body">
        <div class="comment_left">
            <div class="comment__img"><i class="fas fa-user"></i></div>
            <div class="comment__time"> 
            <div class="comment__name">${item.name}</div>
            <div class="time__delay">${newTimeDiff} ${timeName} ago</div>
            </div>   
        </div>
        <div class="comment_right"><i class="fas fa-ellipsis-v"></i></div>
        </div>
        <div class="comment__msg">
           ${item.message}
        </div>
       
        </div> `;
    });
    template = template.join("");
    comments.innerHTML = template;
}
