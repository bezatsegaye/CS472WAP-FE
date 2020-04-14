"use strict";

window.onload = () => {
    getDoctors()

    function getDoctors() {
        fetch("../json/doctors.json")
            .then(response => response.json())
            .then((doctors) => {
                doctors.forEach((item, index) => {
                    const fullName = [item.firstName, item.middleName, item.lastName]
                        .filter(item => item !== null)
                        .join(" ")
                    const row = `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${item.id}</td>
                        <td>${fullName}</td>
                        <td>${item.phoneNumber}</td>
                        <td>${item.address}</td>
                    </tr>
                    `;
                    $(table).find('tbody').append(row);
                })
            })
            .catch(error => alert(error));
    }
}