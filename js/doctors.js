"use strict";

window.onload = () => {

    getDoctors();

    function getDoctors() {
        fetch("../json/doctors.json")
            .then(response => response.json())
            .then((doctors) => {
                doctors.forEach((item, index) => {
                    const row = buildRow(item, index);
                    $(table).find('tbody').append(row);
                })
            })
            .catch(error => alert(error));
    }

    function buildRow(doctor, index) {
        const fullName = [doctor.firstName, doctor.middleName, doctor.lastName]
            .filter(item => item !== null)
            .join(" ")
        const row = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${doctor.id}</td>
                <td>${fullName}</td>
                <td>${doctor.phoneNumber}</td>
                <td>${doctor.address}</td>
            </tr>
            `;
        return row;
    }
}