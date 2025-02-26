import Donation from "../models/Donation.js";
import Transaction from "../models/Transaction.js";

export const processDonation = async (req, res) => {
    const { amount, donorId, referralCode } = req.body;

    try {
        const donation = await Donation.create({ amount, donor: donorId, referredBy: referralCode });
        await Transaction.create({ donorName: "Anonymous", amount, referralCode });

        res.json({ success: true, donation });
    } catch (error) {
        res.status(500).json({ message: "Donation processing failed", error });
    }
};
