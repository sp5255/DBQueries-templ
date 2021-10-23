const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name: "string",
    Email: {
        type: "string",
        required: true,
    },
    Mobile: {
        type: number,
        requird: true,
    },
    Password:{
        type:"string",
        required:true,
    },
    Address: {
        type: "string",
    },
});

const User = new mongoose.model("User", UserSchema);

export default User;
