/**
 * Required External Modules
 */

import express from "express";


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
    res.sendFile("index.html", {root: __dirname });
});

/**
 * Server Activation
 */

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`listening for connections on http://localhost:${port}`);
});