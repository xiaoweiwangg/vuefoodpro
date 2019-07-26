let exp=require("express")
let fs=require("fs")

let app=exp()
app.use(exp.static("./data.json"))
app.get("/data",(req,res)=>{
  fs.readFile("./data.json",(err,data)=>{
    res.send(data)
  })
})
app.listen(8090)