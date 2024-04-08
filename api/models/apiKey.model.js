const mongoose = require("mongoose");

const apiKeySchema = mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true // Ensure key is unique
        },
        hospitalId: {
            type: String,
            required: true,
            unique: true // Ensure hospitalId is unique
        }
    },
    {
        timestamps: true
    }
);

const ApiKey = mongoose.model("ApiKey", apiKeySchema);

module.exports = ApiKey;
