import Transaction from "../models/Transaction.js";

export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ referralCode: req.params.referralCode });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch transactions", error });
    }
};
