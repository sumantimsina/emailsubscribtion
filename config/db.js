const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://EmailSender:AcC4ZQq6OEkJ2lSK@cluster0.c2ybn.mongodb.net/subscription_emails?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );

  console.log(`MongoDB connected `);
};

module.exports = connectDB;
