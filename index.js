const express = require("express")

const app = express()
app.get("/add", function(req, res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        ans : a + b
    }
    )
})

app.get("/subraction", function(req, res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        ans : a - b
    })
})

app.get("/multiplication",function(req,res){
    const a = req.query.a
    const b = req.query.b

    res.json({
        ans: a * b
    })
})
app.listen(3000)    