import java.io.IOException;

import com.azul.crs.client.Response;

import okhttp3.*;

public class TunzishaAPIClient {

    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();
    private static final MediaType JSON = MediaType.parse("application/json");

    private final String baseUrl;

    public TunzishaAPIClient(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public String addPatient(String patientJson) throws IOException {
        RequestBody body = RequestBody.create(JSON, patientJson);
        Request request = new Request.Builder()
                .url(baseUrl + "/api/Patients")
                .post(body)
                .addHeader("Content-Type", "application/json")
                .build();
        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

    public String getAllPatients() throws IOException {
        Request request = new Request.Builder()
                .url(baseUrl + "/api/Patients")
                .get()
                .build();
        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

    public String getPatientById(String patientId) throws IOException {
        Request request = new Request.Builder()
                .url(baseUrl + "/api/Patients/" + patientId)
                .get()
                .build();
        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

    public String deletePatient(String patientId) throws IOException {
        Request request = new Request.Builder()
                .url(baseUrl + "/api/Patients/" + patientId)
                .delete()
                .build();
        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

    public String updatePatient(String patientId, String updatedPatientJson) throws IOException {
        RequestBody body = RequestBody.create(JSON, updatedPatientJson);
        Request request = new Request.Builder()
                .url(baseUrl + "/api/Patients/" + patientId)
                .put(body)
                .addHeader("Content-Type", "application/json")
                .build();
        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

    // Add more methods for other API endpoints as needed

    public static void main(String[] args) {
        TunzishaAPIClient apiClient = new TunzishaAPIClient("https://localhost:3000");
        try {
            // Example usage:
            String patientJson = "{\"patientId\": 125,\"firstName\": \"Dennis\",\"secondName\": \"Otieno\",\"age\": 25,\"gender\": \"Male\",\"profileImage\": \"YAYGSLSMNJAMAN\",\"contactNumber\": \"+254743992235\",\"nextOfKin\": \"Michael Omolo\",\"dateOfBirth\": \"01/02/1999\",\"inpatient\": true,\"symptoms\": \"breathlessness coughing dry_throat\",\"diagnosis\": \"Covid-19 Omicron\",\"prescription\": \"Vitamin C and Zinc tablets, each 1 x 3\"}";
            String response = apiClient.addPatient(patientJson);
            System.out.println("Add Patient Response: " + response);

            String allPatientsResponse = apiClient.getAllPatients();
            System.out.println("Get All Patients Response: " + allPatientsResponse);

            String singlePatientResponse = apiClient.getPatientById("65ee32e5390498ef1815c685");
            System.out.println("Get Single Patient Response: " + singlePatientResponse);

            String deleteResponse = apiClient.deletePatient("65ee32e5390498ef1815c685");
            System.out.println("Delete Patient Response: " + deleteResponse);

            String updatedPatientJson = "{\"patientId\": \"65ee32e5390498ef1815c685\", \"firstName\": \"Updated Name\", \"age\": 30}";
            String updateResponse = apiClient.updatePatient("65ee32e5390498ef1815c685", updatedPatientJson);
            System.out.println("Update Patient Response: " + updateResponse);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
