
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("DateOfBirth is in a valid date format", function () {
    const responseData = pm.response.json();
    
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.dateOfBirth).to.match(/^\d{4}-\d{2}-\d{2}$/);
});


pm.test("Content-Type header is application/json", function () {
    pm.expect(pm.response.headers.get('Content-Type')).to.include('application/json');
});


pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
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
        <th>__v</th>
    </tr>
    
    <tr>
        <td>{{response.patientId}}</td>
        <td>{{response.firstName}}</td>
        <td>{{response.secondName}}</td>
        <td>{{response.age}}</td>
        <td>{{response.gender}}</td>
        <td>{{response.profileImage}}</td>
        <td>{{response.contactNumber}}</td>
        <td>{{response.nextOfKin}}</td>
        <td>{{response.dateOfBirth}}</td>
        <td>{{response.inpatient}}</td>
        <td>{{response.symptoms}}</td>
        <td>{{response.diagnosis}}</td>
        <td>{{response.prescription}}</td>
        <td>{{response.createdAt}}</td>
        <td>{{response.updatedAt}}</td>
        <td>{{response.__v}}</td>
    </tr>
</table>
`;

function constructVisualizerPayload() {
    return {response: pm.response.json()}
}

pm.visualizer.set(template, constructVisualizerPayload());
pm.test("Response content type is application/json", function () {
    pm.expect(pm.response.headers.get('Content-Type')).to.include('application/json');
});
// Stores the patientId in an environment or global variable
var patientId = pm.response.json().patientId;
pm.globals.set("patientId", patientId);