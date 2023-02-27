//Zum Starten in PowerShell Terminal node login.js eingeben und localhost 3000 besuchen.

const mysql = require("mysql");
const express = require("express");
const session = require("express-session");
const path = require("path");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodelogin",
});

const app = express();

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

// http://localhost:3000/
app.get("/", function (request, response) {
  // Render login template
  response.sendFile(path.join(__dirname + "/login.html"));
});

// http://localhost:3000/auth
app.post("/auth", function (request, response) {
  // Capture the input fields
  let username = request.body.username;
  let password = request.body.password;
  // Ensure the input fields exists and are not empty
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
          // Authenticate the user
          request.session.loggedin = true;
          request.session.username = username;
          // Redirect to admin page
          response.redirect("/admin");
        } else {
          response.send("Incorrect Username and/or Password!");
        }
        response.end();
      }
    );
  } else {
    response.send("Please enter Username and Password!");
    response.end();
  }
});

// http://localhost:3000/home
app.get("/admin", function (request, response) {
  // If the user is loggedin
  if (request.session.loggedin) {
    // Output username
    response.sendFile(__dirname + "/admin.html");
    console.log("Sent admin.html file");
    // Redirect to admin.html and send the file after the redirect is complete
  } else {
    // Not logged in
    response.send("Please login to view this page!");
  }
});

app.post("/admin-form", function (req, res) {
  // Capture form data
  let word = req.body.word;
  let hint = req.body.hint;

  // Insert data into database
  connection.query(
    "INSERT INTO words (word, hint) VALUES (?, ?)",
    [word, hint],
    function (error, results, fields) {
      if (error) throw error;
      res.send("Data saved successfully!");
    }
  );
  console.log("Data saved succesfully!");
});

// http://localhost:3000/play
app.get("/play", function (request, response) {
  response.sendFile(path.join(__dirname + "/play.html"));
});

//App funktioniert, hört auf Port 3000!
app.listen(3000, function () {
  console.log("App listening on port 3000!");
});
