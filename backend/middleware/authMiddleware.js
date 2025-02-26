import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/keys.js";

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};

export default authMiddleware;
