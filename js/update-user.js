"use strict";

window.onload = () => {

    setupData();
    addFormSubmitListener();

    function setupData() {
        document.getElementById("id").value = window.localStorage.getItem("id");
        document.getElementById("firstName").value = window.localStorage.getItem("firstName");
        if (window.localStorage.getItem("middleName") !== "null") {
            document.getElementById("middleName").value = window.localStorage.getItem("middleName");
        }
        document.getElementById("lastName").value = window.localStorage.getItem("lastName");
        document.getElementById("userName").value = window.localStorage.getItem("username");
        document.getElementById("phoneNumber").value = window.localStorage.getItem("phoneNumber");
        document.getElementById("address").value = window.localStorage.getItem("address");
        document.getElementById("isLocked").checked = window.localStorage.getItem("isLocked") == "true";
        document.getElementById("userType").selectedIndex = parseInt(window.localStorage.getItem("userType")) - 1;
        ["firstName", "middleName", "lastName", "phoneNumber", "address", "username", "isLocked", "userType"].forEach(item => {
            window.localStorage.removeItem(item);
        });
    }

    function addFormSubmitListener() {}
}