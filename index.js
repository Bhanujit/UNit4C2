// const {murli, bhanujit} = require("./abc.js")

// murli.purba()
// bhanujit.chasma()

const express = require("express")

const app = express()
app.use(express.json())
const mongoose = require("mongoose")

// ()=>{} (ES6 annonmus function, cause it has no name)
//function a(){

    // }
    // function (){
    
    // }
    // let a = ()=> {
    
    // }
    // a()
    const connect = ()=>{
        return mongoose.connect("mongodb+srv://bhanujit:8794@murali.elmeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    }
app.listen(5000,async()=>{
    try {
        await connect()
        console.log("5000")
    } catch (error) {
        console.log(error)
    }
})
app.get("/user", async(req,res)=>{
   try {
       const user = await User.find().lean().exec();// exec = execute
       return res.send(user)
   }catch (error) {
       console.log(error)
   }
})
app.post("/user", async(req,res)=>{
   try {

       const user = await User.create(req.body);
        return res.send(user)
   }catch (error) {
       console.log(error)
   }
}) 
app.patch("/user/:id", async(req,res)=>{
   try{
       const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec();
        return res.send(user)
   }catch (error) {
       console.log(error)
   }
}) 
app.delete("/user/:id", async(req,res)=>{
   try {
       const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(user)
   }catch (error) {
       console.log(error)
   }
}) 
// app.post is called controller in tech lang


//Schema(Schema is a structure)

const userSchema = new mongoose.Schema(
    {
        firstName:{type:String,required:true},        
        middleName:{type:String,required:true},        
        lastName:{type:String,required:true},
        age: {type:Number, require:true},
        email: {type:String, require:true},
        address: {type:String, require:true},
        gender: {type:Number, require:true},
        type: {type:Number, require:false},
        createdAt:{type:String, required:true},
        updatedAt:{type:String,required:true}
    
    }
)
const branchDetail = new mongoose.Schema(
    {
        name:{type:String,required:true},
        adress:{type:String,required:true},
        IFSC:{type:String,required:true},
        MICR:{type:Number,required:true},
        createdAt:{type:String,required:true},
        updatedAt:{type:String,required:true}
    }
)
const MasterAccount = new mongoose.Schema(
    {
        balance:{type:Number,required:true},
        createdAt:{type:String,required:true},
        updatedAt:{type:String,required:true}
    }
)
const SavingsAccount = new mongoose.Schema(
    {
        account_number:{type:Number,required:true},
        balance:{type:Number,required:true},
        interestRate:{type:Number,required:true},
        createdAt:{type:String,required:true},
        updatedAt:{type:String,required:true}
    }
)
const FixedAccount = new mongoose.Schema(
    {
        account_number:{type:Number,required:true},
        balance:{type:Number,required:true},
        interestRate:{type:Number,required:true},
        startDate:{type:Date,required:true},
        maturityDate:{type:Date,required:true},

        createdAt:{type:String,required:true},
        updatedAt:{type:String,required:true}
    }
)
const User = mongoose.model("user",userSchema )
const UserBranchDetais = mongoose.model("BranchDetail", branchDetail)
const UserMasterAccount = mongoose.model("MasterAccount", MasterAccount)
const UserSavingsAccount = mongoose.model("SavingsAccount", SavingsAccount)
const UserFixedAccount = mongoose.model("FixedAccount", FixedAccount)

// Document is a form of object
/*
{
    name: "bhanujit",
    age: 22
    Gender: "male"

},
{
    name: "Abhinandan",
    age: 25
    Gender: "male"

},
{
    name: "Murali",
    age: 28,
    Gender: "male"

}
In NoSQL we have collection not table
 */

// app.get("",(req,res)=>{
//    try {
//         res.send("hello world")
//    } catch (error) {
//        console.log(error)
//    }
// })
// app.get("/mark",(req,res)=>{
//     try {
       
//          res.send("300")
         
//     } catch (e) {
//         console.log(e)
//     }
//  })
//  app.get("/name",(req,res)=>{
//     try {
//          res.send("Murli")
//     } catch (error) {
//         console.log(error)
//     }
//  })
//  app.get("/anything",(req,res)=>{
//     try {
//          res.send("Murli is the best teacher remove dhawal")
//     } catch (error) {
//         console.log(error)
//     }
//  })
// //  app.get("/movie/:title",(req,res)=>{
// //     try {
// //         console.log(req)
// //          res.send(req.params.title)
// //     } catch (error) {
// //         console.log(error)
// //     }
// //  })
//  app.get("/movie/:title",(req,res)=>{
//     try {
    
//          res.send({movie:req.params.title})
//     } catch (error) {
//         console.log(error)
//     }
//  })