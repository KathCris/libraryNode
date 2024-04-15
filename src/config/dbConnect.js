import mongoose from "mongoose";

async function connectDataBase () {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.jkhjkjf.mongodb.net/Livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}

export default connectDataBase;