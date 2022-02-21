// create an express app
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

// define the first route
app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(port,
    () => console.log("Server is running... on " + port)
);