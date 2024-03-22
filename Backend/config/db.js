const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect("mongodb+srv://samarth:Samarth123@cluster0.1tojgwa.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => {
            console.error(err.message);
            process.exit(1);
        });
};

module.exports = connectDB;