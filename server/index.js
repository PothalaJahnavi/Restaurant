require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const app=express();
const {PORT,MONGO_URL}=require('../config/keys');
app.use(cors());
app.use(express.json());



mongoose.connect(MONGO_URL,(err)=>{
    if(err)
    console.log(err);
    else
    console.log("db connected");
}
);

const registerSchema=new mongoose.Schema({
   fname:String,
   lname:String,
   email:String,
   password:String
}) 


const mywayData=mongoose.model("mywayData",registerSchema);

app.post("/register",(req,res)=>{
    const data = req.body;
    const newUser=new mywayData(data);
    // if(newUser.findOne(email===newUser.email))
    // {
    //     alert("user already exists")
    // }
    // else
    // {
        newUser.save().then(data=>{
            res.send(data);
         }).catch(err=>{
           console.log(err);    
        })
    // }
})

app.post("/login",(req,res)=>{
    const logdata=req.body;
   mywayData.findOne({email:logdata.email,password:logdata.password}).then((user)=>{
        res.send(user)

    }).catch((err)=>{
        console.log(err);
    })

})

if(process.env.NODE_ENV=='production')
{
    const path=require('path')
    app.get("/",(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`)
})