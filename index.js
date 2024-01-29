const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/version", (req, res) => {
 res.send({
    version:"1.0.75"
 })
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
