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
                <td><button type="button" id ="" val class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                         Edit
                       </button> </td>                    
            </tr>
            `;
        return row;
    }
    $(document).on("click", ".btn", function() {
      var $row = $(this).closest("tr");    // Find the row
        var $id = $row.find(".id").text(); // Find the text id
        var $fname = $row.find(".fname").text(); // Find the text name
        var $phone = $row.find(".phone").text(); // Find the text phone
        var $address = $row.find(".address").text(); // Find the text address
        //console.log($text);
        // Let's test it out
        //alert($text);
           
        $("#patientId").val($id);
        $("#patientName").val($fname);
        $("#patientPhone").val($phone);
        $("#patientAddress").val($address);
    // $(".btn").click(function() {
    //     var $row = $(this).closest("tr");    // Find the row
    //     console.log($row);
    //     var $text = $row.find(".nr").text(); // Find the text
    //     console.log($text);
    //     // Let's test it out
    //     //alert($text);
     });
}