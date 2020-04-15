"use strict";

window.onload = () => {

    let users;

    getUsers();

    function getUsers() {
        fetch("../json/users.json")
            .then(response => response.json())
            .then((items) => {
                users = items
                items.forEach((item, index) => {
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
                <input type="hidden" id="index" value="${index}">
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


    $(document).on("click", "table tbody tr", function() {
        const index = $(this).children("#index").val();
        const item = users[index];
        window.localStorage.setItem("id", item.id);
        window.localStorage.setItem("firstName", item.firstName);
        window.localStorage.setItem("lastName", item.lastName);
        window.localStorage.setItem("phoneNumber", item.phoneNumber);
        window.localStorage.setItem("address", item.address);
        window.localStorage.setItem("username", item.username);
        window.localStorage.setItem("userType", item.userType);
        window.localStorage.setItem("isLocked", item.isLocked);
        window.localStorage.setItem("userType", item.userType);
        window.location = "../update-user.html";
    });
}