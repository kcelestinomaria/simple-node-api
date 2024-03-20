
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});


pm.test("DateOfBirth is in a valid date format", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.dateOfBirth).to.match(/^\d{4}-\d{2}-\d{2}$/);
});


pm.test("Response time is less than 200ms", function () {
  pm.expect(pm.response.responseTime).to.be.below(200);
});

