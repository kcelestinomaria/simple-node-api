
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("Response has the required fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.inpatient).to.be.a('boolean');
});



