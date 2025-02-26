import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    referralCode: String,
    donations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donation" }]
});

export default mongoose.model("User", userSchema);
