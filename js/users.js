"use strict";

window.onload = () => {

    getUsers();

    function getUsers() {
        fetch("../json/users.json")
            .then(response => response.json())
            .then((users) => {
                users.forEach((item, index) => {
                    const row = buildRow(item, index);
                    $(table).find('tbody').append(row);
                })
            })
            .catch(error => alert(error));
    }

    function buildRow(user, index) {
        const fullName = [user.firstName, user.middleName, user.lastName]
            .filter(item => item !== null)
            .join(" ")

        let userType = "Admin";
        if (user.userType === 2) {
            userType = "Doctor";
        } else if (user.userType === 3) {
            userType = "Patient";
        }

        const row = `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${user.id}</td>
                <td>${fullName}</td>
                <td>${user.username}</td>
                <td>${userType}</td>
                <td>${user.phoneNumber}</td>
                <td>${user.address}</td>
                <td>${user.isLocked}</td>
            </tr>
            `;
        return row;
    }
}