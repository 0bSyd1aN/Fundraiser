import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received Registration Request:", req.body);

  try {
      // Check if email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          console.log("Email already registered:", email);
          return res.status(400).json({ message: "Email already exists. Please use a different email." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("🔑 Password hashed successfully");

      const referralCode = Math.random().toString(36).substring(2, 8);
      console.log("Generated referral code:", referralCode);

      const newUser = await User.create({ name, email, password: hashedPassword, referralCode });
      console.log("User created successfully:", newUser);

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
      console.log("JWT Token generated successfully");

      return res.json({ token, user: newUser });
  } catch (error) {
      console.error("Registration failed:", error);
      return res.status(500).json({ message: "Registration failed", error: error.message || error });
  }
};

export const login = async (req, res) => {
  try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
      res.json({ token, user });
  } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ message: "Login failed", error: error.message });
  }
};