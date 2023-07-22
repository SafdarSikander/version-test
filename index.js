const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
 res.send({
    version:"1.0.52"
 })
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));
