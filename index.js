const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/compute",(req,res) => {
    let num = req.query.number;
    let n = parseFloat(num);
    let r = n**0.5;
    let ans = "Square root of "+n+" is "+r.toFixed(2);
    res.json({"msg":ans});
})

app.listen(9000,()=>{console.log("Ready at @9000");});