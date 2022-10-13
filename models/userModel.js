const mongoose = require('mongoose')
const {use} = require("express/lib/router");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "user must have username"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "user must have password"]
	}
})

const User = mongoose.model("User", userSchema)
module.exports = User