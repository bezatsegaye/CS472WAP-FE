"use strict";

window.onload = () => {
    document.getElementById("form").addEventListener("submit", (event) => {
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const lastName = document.getElementById("lastName").value;
        const username = document.getElementById("userName").value;
        const userType = document.getElementById("userType").value;
        const password = document.getElementById("password").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const address = document.getElementById("address").value;
        const isLocked = document.getElementById("isLocked").value;

        const user = {
            "firstName": firstName,
            "middleName": middleName,
            "lastName": lastName,
            "username": username,
            "userType": userType,
            "password": password,
            "phoneNumber": phoneNumber,
            "address": address,
            "isLocked": isLocked
        }

        console.log(user);

        const url = "";
        const request = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        };

        fetch(url, request)
            .then(response => response.json())
            .then(user => console.log(user))
            .catch(error => console.log(error));

        event.preventDefault();
    });
}