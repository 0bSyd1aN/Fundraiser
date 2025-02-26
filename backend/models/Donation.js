import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    amount: Number,
    donor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    referredBy: String, 
    date: { type: Date, default: Date.now }
});

export default mongoose.model("Donation", donationSchema);
