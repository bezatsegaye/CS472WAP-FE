"use strict";

window.onload = () => {
    document.getElementById("signinButton").addEventListener("click", () => {
        const username = document.getElementById("inputEmail").value;
        const password = document.getElementById("inputPassword").value;
        if (username === "" || password === "") {
            alert("Email and password cannot be empty");
            return
        }

        //username: admin password: admin role: admin
        //username: doctor password: doctor role: doctor
        //username: patient password: patient role: patient
        if (username === "admin" && password === "admin") {
            document.cookie = `username=Admin`;
            document.cookie = `role=admin`;
            window.location = "../index.html";
        } else if (username === "doctor" && password === "doctor") {
            document.cookie = `username=Doctor`;
            document.cookie = `role=doctor`;
            window.location = "../index.html";
        } else if (username === "patient" && password === "patient") {
            document.cookie = `username=Patient`;
            document.cookie = `role=patient`;
            window.location = "../index.html";
        }

        // fetch("../json/signin.json")
        //     .then(response => response.json())
        //     .then(user => {
        //         document.cookie = `username=${user.username}`;
        //         document.cookie = `role=${user.role}`;
        //         window.location = "../index.html";
        //     })
        //     .catch(error => alert(error));
    })
}