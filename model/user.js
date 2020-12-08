const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: Number },
    address: {
        "house/flat": { type: String },
        "addressLine1": { type: String },
        "addressLine": { type: String },
        "city": { type: String },
        "state": { type: String },
        "pinCode": { type: Number }
    }
});
module.exports = mongoose.model("user", user);
