const express = require("express")

const app = express()
app.use(express.json())
let totalCount = 0;

function middleWare(req,res,next){
    totalCount+=1;
    console.log(`The total num of Requests ${totalCount}`)
    console.log(`The Method was ${req.method}`)
    console.log(`The time the request was hitted is ${new Date()}`)
    console.log(`The Url is ${req.url}`)
    next();
}
app.use(middleWare)

app.post("/sum",function(req, res){
    console.log(req.body)

    const a = req.body.a
    const b = req.body.b

    res.json({
        ans: a + b
    })
})
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