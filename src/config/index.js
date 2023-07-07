require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 8000,
    API_KEY_SECRET: process.env.API_KEY_SECRET || "chit_chat_default_secret",
    FIREBASE_DB_URL: process.env.FIREBASE_DB_URL,
    NGROK_ENABLED: process.env.NGROK_ENABLED,
    NGROK_AUTH_TOKEN: process.env.NGROK_AUTH_TOKEN,
    TURN_ENABLED: process.env.TURN_ENABLED,
    TURN_URLS: process.env.TURN_URLS,
    TURN_USERNAME: process.env.TURN_USERNAME,
    TURN_PASSWORD: process.env.TURN_PASSWORD,
}