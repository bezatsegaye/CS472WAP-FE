"use strict";

window.onload = () => {

    let doctors;

    getDoctors();

    function getDoctors() {
        fetch("../json/doctors.json")
            .then(response => response.json())
            .then((items) => {
                doctors = items;
                items.forEach((item, index) => {
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
                <input type="hidden" id="index" value="${index}">
                <th scope="row">${index + 1}</th>
                <td>${doctor.id}</td>
                <td>${fullName}</td>
                <td>${doctor.phoneNumber}</td>
                <td>${doctor.address}</td>
            </tr>
            `;
        return row;
    }

    $(document).on("click", "table tbody tr", function() {
        const index = $(this).children("#index").val();
        const item = doctors[index];
        window.localStorage.setItem("id", item.id);
        window.localStorage.setItem("firstName", item.firstName);
        window.localStorage.setItem("lastName", item.lastName);
        window.localStorage.setItem("phoneNumber", item.phoneNumber);
        window.localStorage.setItem("address", item.address);
        window.location = "../update-doctor.html";
    });
}