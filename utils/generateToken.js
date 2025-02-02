const jwt = require("jsonwebtoken");

const generateToken = async (data) => {
    try {
        var token = await jwt.sign(data, process.env.SECRET_KEY);
        return token;
    } catch (error) {
        console.log("couldn't create token:", error);
    }
};

const cookieOptions = {
    httpOnly: true,
    secure: process.env.ENVIRONMENT === "production" ? true : false,
    sameSite: process.env.ENVIRONMENT === "production" ? "None" : "Lax",
    maxAge: 1 * 60 * 60 * 1000, // 1 hour
};

module.exports = {
    generateToken,
    cookieOptions,
};
