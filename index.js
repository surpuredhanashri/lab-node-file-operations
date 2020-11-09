const os = require("os")
const fs = require("fs")
const crypto = require("crypto")
const data = require("./data")

// Fetching os user details
var value = os.userInfo()

// calling data function which will return object of name, year and qualification
var userdata = data("Prograd", 2020, "BE")

// encrpts the simple string using sha algorithm
const password = crypto.createHmac('sha256', "secret").update('Prograd').digest('hex');

// all the aboe details are added/saved into message.txt
fs.appendFileSync("message.txt", "Prograd Details: \n")

// fs.appendFileSync("message.txt", `\tUserId ->          ${value.uid},\n`)
fs.appendFileSync("message.txt", `\tName ->            ${userdata.name},\n`)
fs.appendFileSync("message.txt", `\tYear ->            ${userdata.Year},\n`)
fs.appendFileSync("message.txt", `\tQualification ->   ${userdata.Qualification},\n`)
fs.appendFileSync("message.txt", `\tUserName ->        ${value.username},\n`)
fs.appendFileSync("message.txt", `\tPassword ->        ${password},\n`)

// console.log(value.uid)
// console.log(userdata.name)
// console.log(userdata.Year)
// console.log(userdata.Qualification)
// console.log(value.username)
// console.log(password)

