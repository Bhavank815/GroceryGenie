import mongoose from "mongoose";

export const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "GroceryGenie",
    }).then(() => console.log("Database is connected."))
    .catch((e) => console.log(e))
}