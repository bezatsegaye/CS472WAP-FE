"use strict";

window.onload = () => {
    document.getElementById("signinButton").addEventListener("click", () => {
        fetch("../json/signin.json")
            .then(response => response.json())
            .then(user => {
                document.cookie = `username=${user.username}`;
                document.cookie = `role=${user.role}`;
                window.location = "../index.html";
            })
            .catch(error => alert(error));
    })
}