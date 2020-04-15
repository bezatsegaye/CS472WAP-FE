"use strict";

window.onload = () => {
    

    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();
        const patientName = document.getElementById("patientName").value;
        const doctorName = document.getElementById("doctorName").value;
        const checkInDateTime = document.getElementById("checkInDateTime").value;
        const checkOutDateTime = document.getElementById("checkOutDateTime");
        const charge = document.getElementById("charge").value;
        const descritption = document.getElementById("descritption").value;


        //to get selected values from Medication Type
        const checkboxesMedicine = document.getElementsByName('medicineType');
        let medicinesSelected = "";
        for (let i=0, n=checkboxesMedicine.length;i<n;i++) 
        {
            if (checkboxesMedicine[i].checked) 
            {
                medicinesSelected += ","+checkboxesMedicine[i].value;
            }
        }
        console.log(medicinesSelected); //to be removed

        //to get selected values from Disease Type
        const checkboxesDisease = document.getElementsByName('diseaseCatagory');
        let diseaseSelected = "";
        for (let i=0, n=checkboxesDisease.length;i<n;i++) 
        {
            if (checkboxesDisease[i].checked) 
            {
                diseaseSelected += ","+checkboxesDisease[i].value;
            }
        }
        console.log(diseaseSelected); //to be removed

        //set checout date to now
        checkOutDateTime.textContent = new Date();
        // const patient = {
        //     "patientNumber": patientNumber,
        //     "firstName": firstName,
        //     "middleName": middleName,
        //     "lastName": lastName,
        //     "phoneNumber": phoneNumber,
        //     "address": address
        // }

        // const url = "";
        // const request = {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(patient)
        // }
        // fetch(url, request)
        //     .then(response => response.json())
        //     .then(patient => console.log(patient))
        //     .catch(error => console.log(error));

        event.preventDefault();
    });

}