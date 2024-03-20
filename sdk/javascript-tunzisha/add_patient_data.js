var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'localhost:3000/api/Patients',
  'path': '/api/Patients',
  'headers': {
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({
  "patientId": 125,
  "firstName": "Dennis",
  "secondName": "Otieno",
  "age": 25,
  "gender": "Male",
  "profileImage": "YAYGSLSMNJAMAN",
  "contactNumber": "+254743992235",
  "nextOfKin": "Michael Omolo",
  "dateOfBirth": "01/02/1999",
  "inpatient": true,
  "symptoms": "breathlessness coughing dry_throat",
  "diagnosis": "Covid-19 Omicron",
  "prescription": "Vitamin C and Zinc tablets, each 1 x 3"
});

req.write(postData);

req.end();