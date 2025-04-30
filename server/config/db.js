const express = require("express");
const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  DB_HOST: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
  DB_USERNAME: "4HrUbDy5TcxJ8HE.root",
  DB_PASSWORD: "eN2674uT0a0OlBIK",
  DB_DATABASE: "lptc-pms",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) {
    console.log("A error has been occurred " + "while connecting to database.");
    throw error;
  }
  console.log("Connected to the database.");
});
