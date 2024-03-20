
pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});


pm.test("Response has the required fields", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
});

pm.test("Response content type is application/json", function () {
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});