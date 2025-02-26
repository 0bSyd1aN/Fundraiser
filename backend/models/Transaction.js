import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    donorName: String,
    amount: Number,
    date: { type: Date, default: Date.now },
    referralCode: String
});

export default mongoose.model("Transaction", transactionSchema);
