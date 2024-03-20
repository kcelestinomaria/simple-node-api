public class get_single_patient_data {

    public static void main(String[] args) {

        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        MediaType mediaType = MediaType.parse("text/plain");
        RequestBody body = RequestBody.create(mediaType, "");
        Request request = new Request.Builder()
                .url("https://localhost:3000/api/Patients/65ee32e5390498ef1815c685")
                .method("GET", body)
                .build();
        Response response = client.newCall(request).execute();
    }
}
