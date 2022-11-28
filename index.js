const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const Register=require("./registerschema.js")
const mongoose=require("mongoose")
const port=4013;

console.log(Register)

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://prasanna:prasanna2204@cluster0.nvxqdgw.mongodb.net/?retryWrites=true&w=majority")
 	.then(()=>{
 		console.log("created mongoose database")
 	})
 	.catch((err)=>{
 		console.log(err)
 	})

app.get("/",(req,res)=>{

})

app.post("/register",(req,res)=>{
	//const{username,password}=req.body
	const username="dummyname",password="dummypassword"
	const newUser=new Register({
		username:username,
		password:password
	})
	newUser.save()

})

app.listen(port,()=>console.log("served started at 4013"))