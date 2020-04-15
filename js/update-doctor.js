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
        document.getElementById("phoneNumber").value = window.localStorage.getItem("phoneNumber");
        document.getElementById("address").value = window.localStorage.getItem("address");
        //window.localStorage.getItem("specialization");
        ["firstName", "middleName", "lastName", "phoneNumber", "address", "specialization"].forEach(item => {
            window.localStorage.removeItem(item);
        });
    }

    function addFormSubmitListener() {}
}