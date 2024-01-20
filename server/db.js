import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const Connection = async () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log("Connection Successful.")
    }
    catch (error) {
        console.log("Error: " + error)
    }
}

// export { Connection };
Connection();