"use strict";

updateNavBar();

function updateNavBar() {
    const username = getCookie("username");
    if (username === "") {
        window.location = "../signin.html";
    } else {
        document.getElementById("username").innerHTML = `Hi, ${username}`;
    }
}

document.getElementById("signOutButton").addEventListener("click", (event) => {
    document.cookie = "username=;";
    document.cookie = "role=;";
    window.location = "../signin.js";
});

// Whatever... I got this chunk of code from the internet. Will check later... xD
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}