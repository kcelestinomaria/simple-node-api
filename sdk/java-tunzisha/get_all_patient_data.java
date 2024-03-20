public class get_all_patient_data {

    public static void main(String[] args) {

        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        MediaType mediaType = MediaType.parse("text/plain");
        RequestBody body = RequestBody.create(mediaType, "");
        Request request = new Request.Builder()
                .url("https://localhost:3000/api/Patients")
                .method("GET", body)
                .build();
        Response response = client.newCall(request).execute();
    }
}
