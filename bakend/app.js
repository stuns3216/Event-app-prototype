const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const passport = require("passport");
const config = require("./db");

const users = require("./routes/user");
const event = require("./routes/event")

const db= require('./db').mongoURI

// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
// 	() => {
// 		console.log("Database is connected");
// 	},cls
// 	err => {
// 		console.log("Can not connect to the database" + err);
// 	}
// );

mongoose.connect(db,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useUnifiedTopology:true
}).then(()=> console.log("MongoDB connected with success")).catch(err=>console.log(err))

const app = express();
app.use(passport.initialize());
require("./passport")(passport);


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/users", users);
app.use("/event",event)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});
