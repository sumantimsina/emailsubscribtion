const express = require("express");
const nodemailer = require("nodemailer");
const exphbs = require("express-handlebars");
const path = require("path");
const connectDB = require("./config/db");

//Loading model
const Email = require("./model/Email");

//connect to database
connectDB();

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

//Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/subscribe", async (req, res) => {
  console.log(req.body.email);
  const user = await Email.findOne({ email: req.body.email });
  let message;
  if (user) {
    message = `<h2>Already subscribed<h2> `;
  } else {
    message = `<h1>To confirm subscription click on following link<h1><br>
    <a href="http://localhost:4000/${req.body.email}"> Click Here </a>`;
  }
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: "suman.timsina1997@gmail.com",
      pass: "x8mL1vAZ0wyXG2cO",
    },
  });

  // send mail with defined transport object
  transporter.sendMail(
    {
      from: '"NodeMailer" <noreply@emailsubscription.com>', // sender address
      to: `${req.body.email}`, // list of receivers
      subject: "Subscription", // Subject line
      text: "Email Subscription", // plain text body
      html: message, // html body
    },
    (err, info) => {
      res.status(200).render("confirmation", {
        message: "Email has been sent please check your mail",
        email: `${req.body.email}`,
      });
    }
  );
});
app.get("/:email", async (req, res) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = req.params.email;
  if (re.test(email) == true) {
    const user = await Email.create({ email });
  }
  res.status().redirect("https://google.com");
});
app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
