public class get_all_patient_data {

    public static void main(String[] args) {

        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        MediaType mediaType = MediaType.parse("text/plain");
        RequestBody body = RequestBody.create(mediaType, "");
        Request request = new Request.Builder()
                .url("https://3000-kcelestinom-tunzishaxch-gy1ysd1zmzc.ws-eu108.gitpod.io/api/Patients")
                .method("GET", body)
                .build();
        Response response = client.newCall(request).execute();
    }
}
