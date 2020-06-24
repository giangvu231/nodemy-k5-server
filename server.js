const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", function (req, res) {
    var duongDanFile = path.join(__dirname, "index.html");
    res.sendFile(duongDanFile);
});

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
