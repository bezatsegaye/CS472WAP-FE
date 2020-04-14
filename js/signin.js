"use strict";

window.onload = () => {
    document.getElementById("signinButton").addEventListener("click", () => {
        const username = document.getElementById("inputEmail").value;
        const password = document.getElementById("inputPassword").value;
        if (username === "" || password === "") {
            alert("Email and password cannot be empty");
            return
        }
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