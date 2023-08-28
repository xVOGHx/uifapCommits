const express = require ("express");
const app = express();

app.get("/ola", (req,res) => {
    res.json({Hello: "world"});
})

app.listen(3030, () => {
    console.log("server running on port 3030");
})