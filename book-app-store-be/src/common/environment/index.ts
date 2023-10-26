import 'dotenv/config'
export const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL || 'mongodb://localhost:27017';
export const APP_PORT = process.env.APP_PORT  || 3000;