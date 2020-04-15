"use strict";

window.onload = () => {

    let patients;

    getPatients();

    function getPatients() {
        fetch("../json/patients.json")
            .then(response => response.json())
            .then((items) => {
                patients = items;
                items.forEach((item, index) => {
                    const row = buildRow(item, index);
                    $(table).find('tbody').append(row);
                })
            })
            .catch(error => alert(error));
    }

    function buildRow(patients, index) {
        const fullName = [patients.firstName, patients.middleName, patients.lastName]
            .filter(item => item !== null)
            .join(" ")
        const row = `
            <tr>
                <input type="hidden" id="index" value="${index}">
                <th scope="row">${index + 1}</th>
                <td class="id">${patients.id}</td>
                <td class="fname">${fullName}</td>
                <td class = "phone">${patients.phoneNumber}</td>
                <td class = "address">${patients.address}</td>
               
                <td><button type="button" id ="" val class="btnEdit btn-primary" data-toggle="modal" data-target="#editPatientModal">
                Edit
                </button> </td>   
                <td><button type="button" id ="" val class="btnDelete btn-primary" data-toggle="modal" data-target="#deletePatientModal">
                Delete
                </button> </td> 
                                 
            </tr>
            `;
        return row;
    }
    $(document).on("click", ".btnEdit", function() {
      var $row = $(this).closest("tr");    // Find the row
        var $id = $row.find(".id").text(); // Find the text id
        var $fname = $row.find(".fname").text(); // Find the text name
        var $phone = $row.find(".phone").text(); // Find the text phone
        var $address = $row.find(".address").text(); // Find the text address
        $("#patientId").val($id);
        $("#patientName").val($fname);
        $("#patientPhone").val($phone);
        $("#patientAddress").val($address);
     });
     $(document).on("click", ".btnDelete", function() {
        var $row = $(this).closest("tr");    // Find the row
          var $id = $row.find(".id").text(); // Find the text id
          $("#deletePatientId").val($id);
       });
}