
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Date of Birth is in a valid date format", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('array');
    responseData.forEach(function(patient) {
        pm.expect(patient.dateOfBirth).to.match(/^\d{4}-\d{2}-\d{2}$/);
    });
});


pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});


pm.test("Response is an array of objects", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('array').and.to.not.be.empty;
    responseData.forEach(function(item) {
        pm.expect(item).to.be.an('object');
    });
});

var template = `
<style type="text/css">
    .tftable {font-size:14px;color:#333333;width:100%;border-width: 1px;border-color: #87ceeb;border-collapse: collapse;}
    .tftable th {font-size:18px;background-color:#87ceeb;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;text-align:left;}
    .tftable tr {background-color:#ffffff;}
    .tftable td {font-size:14px;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;}
    .tftable tr:hover {background-color:#e0ffff;}
</style>

<table class="tftable" border="1">
    <tr>
        <th>ID</th>
        <th>Patient ID</th>
        <th>First Name</th>
        <th>Second Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Profile Image</th>
        <th>Contact Number</th>
        <th>Next of Kin</th>
        <th>Date of Birth</th>
        <th>Inpatient</th>
        <th>Symptoms</th>
        <th>Diagnosis</th>
        <th>Prescription</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>V</th>
    </tr>
    
    {{#each response}}
        <tr id=row_{{@key}}>
            <td>{{_id}}</td>
            <td>{{patientId}}</td>
            <td>{{firstName}}</td>
            <td>{{secondName}}</td>
            <td>{{age}}</td>
            <td>{{gender}}</td>
            <td>{{profileImage}}</td>
            <td>{{contactNumber}}</td>
            <td>{{nextOfKin}}</td>
            <td>{{dateOfBirth}}</td>
            <td>{{inpatient}}</td>
            <td>{{symptoms}}</td>
            <td>{{diagnosis}}</td>
            <td>{{prescription}}</td>
            <td>{{createdAt}}</td>
            <td>{{updatedAt}}</td>
            <td>{{__v}}</td>
        </tr>
    {{/each}}
</table>
`;

function constructVisualizerPayload() {
    return {response: pm.response.json()}
}

pm.visualizer.set(template, constructVisualizerPayload());