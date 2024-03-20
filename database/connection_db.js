import mongoose from "mongoose";
import {DB_PASSWORD} from '../config.js';

const connection_db = async () => {
    try {
        const connectionString = `mongodb+srv://cuentaclasef5:${DB_PASSWORD}@cluster0.nl9lbmh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        await mongoose.connect(connectionString);
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

export default connection_db;

