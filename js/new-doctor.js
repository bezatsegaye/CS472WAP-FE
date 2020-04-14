"use strict";

window.onload = () => {

    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const lastName = document.getElementById("lastName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const address = document.getElementById("address").value;
        // const specializationId = document.getElementById("specializationId").value;
        const doctor = {
            "firstName": firstName,
            "middleName": middleName,
            "lastName": lastName,
            "phoneNumber": phoneNumber,
            "address": address
        }

        const url = "";
        const request = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doctor)
        }
        fetch(url, request)
            .then(response => response.json())
            .then(doctor => console.log(doctor))
            .catch(error => console.log(error));

        event.preventDefault();
    });

}