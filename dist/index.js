/**
 * Required External Modules
 */
// import express from "express";
const express = require("express");
/**
 * App Variables
 */
const app = express();
const port = 8080;
/**
 *  App Configuration
 */
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
    res.send("Hello World!!!!!");
});
/**
 * Server Activation
 */
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`listening for connections on http://localhost:${port}`);
});
