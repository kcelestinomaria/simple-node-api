public class add_patient_data {

    public static void main(String[] args) {

        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType,
                "{\r\n    \"patientId\": 125,\r\n    \"firstName\": \"Dennis\",\r\n    \"secondName\": \"Otieno\",\r\n    \"age\": 25,\r\n    \"gender\": \"Male\",\r\n    \"profileImage\": \"YAYGSLSMNJAMAN\",\r\n    \"contactNumber\": \"+254743992235\",\r\n    \"nextOfKin\": \"Michael Omolo\",\r\n    \"dateOfBirth\": \"01/02/1999\",\r\n    \"inpatient\": true,\r\n    \"symptoms\": \"breathlessness coughing dry_throat\",\r\n    \"diagnosis\": \"Covid-19 Omicron\",\r\n    \"prescription\": \"Vitamin C and Zinc tablets, each 1 x 3\"\r\n}");
        Request request = new Request.Builder()
                .url("https://3000-kcelestinom-tunzishaxch-gy1ysd1zmzc.ws-eu108.gitpod.io/api/Patients")
                .method("POST", body)
                .addHeader("Content-Type", "application/json")
                .build();
        Response response = client.newCall(request).execute();
    }
}