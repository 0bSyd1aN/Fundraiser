import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { JWT_SECRET } from "../config/keys.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const referralCode = Math.random().toString(36).substring(2, 8);

    try {
        const newUser = await User.create({ name, email, password: hashedPassword, referralCode });
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "7d" });

        res.json({ token, user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Registration failed", error });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
    res.json({ token, user });
};
