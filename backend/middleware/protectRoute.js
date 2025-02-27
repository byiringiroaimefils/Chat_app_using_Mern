import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

/**
 * Middleware to protect routes that require authentication
 * Verifies the JWT token and attaches user to the request object
 */
const protectRoute = async (req, res, next) => {
	try {
		// Get token from cookies
		const token = req.cookies.jwt;

		// Check if token exists
		if (!token) {
			return res.status(401).json({ error: "Please login first" });
		}

		// Verify token and decode user id
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Find user by id (exclude password) from decoded token
		const user = await User.findById(decoded.userId).select("-password");

		// Check if user still exists in database
		if (!user) {
			return res.status(401).json({ error: "User not found" });
		}

		// Attach user object to request for use in protected routes
		req.user = user;

		// Move to next middleware/route handler
		next();
	} catch (error) {
		// Log any authentication errors
		console.log("Auth Error:", error.message);
		// Return invalid token error to client
		res.status(401).json({ error: "Invalid token" });
	}
};

export default protectRoute;