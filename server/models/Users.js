const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Exercise: {
        type: String,
        required: true,
    },
    Weight: {
        type: Number,
        required: true,
    },
    Reps: {
        type: Number,
        required: true,
    },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
