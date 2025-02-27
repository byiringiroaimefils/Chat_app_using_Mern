import jwt from "jsonwebtoken";

/**
 * Generates a JWT token and sets it in an HTTP-only cookie
 * @param {string} userId - The user's ID to encode in the token
 * @param {object} res - Express response object to set cookie
 */
const generateTokenAndSetCookie = (userId, res) => {
	// Create JWT token containing userId
	const token = jwt.sign(
		{ userId }, // Payload
		process.env.JWT_SECRET, // Secret key for signing
		{ expiresIn: "30d" } // Token expires in 30 days
	);

	// Set token in HTTP-only cookie
	res.cookie("jwt", token, {
		maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expires in 30 days (in milliseconds)
		httpOnly: true, // Prevents JavaScript access to cookie
		sameSite: "strict", // Cookie only sent to same site
		secure: process.env.NODE_ENV === "production", // HTTPS only in production
	});
};

export default generateTokenAndSetCookie;