const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MONGO DB CONNECTION SUCCESSFULL");
});

connection.on("error", (err) => {
  console.log("CONNECTION ERROR", err);
});
