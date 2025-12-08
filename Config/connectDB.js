import {connect} from "mongoose";

async function connectDB(db) {
    try {
        await connect(`mongodb://127.0.0.1:27017/${db}`)
        console.log("Connected to "+db);
    } catch (error) {
        console.error(error);
    }
}

export default connectDB