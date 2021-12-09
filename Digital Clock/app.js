// Element variables
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const ampm = document.querySelector(".ampm");

function set_ampm(hours) {
    if (hours >= 12) {
        ampm.textContent = "PM";
    } else {
        ampm.textContent = "AM";
    }
}

function set_time() {
    const date = new Date();
    hour.textContent = date.getHours();
    minute.textContent = date.getMinutes();
    second.textContent = date.getSeconds();
    set_ampm(date.getHours())
}

setInterval(set_time, 10);
