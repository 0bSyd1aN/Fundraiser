import Donation from "../models/Donation.js";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";

export const processDonation = async (req, res) => {
    try {
        // Validate request body
        const { amount, donorId, referralCode } = req.body;
        if (!amount || !donorId || !referralCode) {
            return res.status(400).json({ message: "Amount, donorId, and referralCode are required." });
        }

        console.log("🔹 Processing Donation:", { amount, donorId, referralCode });

        const donor = await User.findById(donorId);
        if (!donor) {
            return res.status(404).json({ message: "Donor not found." });
        }

        const donorName = donor.name; 

        const donation = await Donation.create({ 
            amount, 
            donor: donorId, 
            referredBy: referralCode 
        });

     
        const transaction = await Transaction.create({ 
            donorName, 
            amount, 
            referralCode 
        });

        console.log(" Donation Successful:", donation);
        console.log(" Transaction Recorded:", transaction);

        res.status(201).json({ success: true, donation, transaction });
    } catch (error) {
        console.error(" Error Processing Donation:", error.message);
        res.status(500).json({ message: "Donation processing failed", error: error.message });
    }
};
