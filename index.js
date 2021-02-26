const express = require("express");
const consign = require("consign");

const PORT  = 3000;

const app = express();

// ajustar json
app.set("json spaces", 4);

consign()
    .include("models")
    .then("routes")
    .into(app);

app.listen(PORT, () =>  console.log(`NTASK - API -> porta ${PORT}`));