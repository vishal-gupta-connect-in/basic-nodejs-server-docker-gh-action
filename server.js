const express= require("express")
const app = express()


app.get("/",(req,res)=>{
res.send("Hi Everyone.")
})

app.listen(5000,()=>{
    console.log("Backend Server is running on port number 5000")
})