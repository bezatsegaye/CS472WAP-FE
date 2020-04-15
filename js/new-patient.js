"use strict";

window.onload = () => {
    

    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const patientNumber = document.getElementById("patientNumber").value;
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const lastName = document.getElementById("lastName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const address = document.getElementById("address").value;
        
        const patient = {
            "patientNumber": patientNumber,
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
            body: JSON.stringify(patient)
        }
        fetch(url, request)
            .then(response => response.json())
            .then(patient => console.log(patient))
            .catch(error => console.log(error));

        event.preventDefault();
    });

}