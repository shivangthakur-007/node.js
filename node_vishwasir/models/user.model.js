/* 
this will hold the schemas for the user
It explains the different fields of use and how it will be stored in the length.
*/

const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
   name:{
    type: String,
    required:true
   },
   userid:{
    type:String,
    required:true,
    unique:true,
 },
   password:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true,
    unique:true,
    minlength:10,
    lowercase:true
   },
   usertype:{
    type:String,
    required:true,
    default:'Customer',
    enum:['Customer','Admin']
   },
},{timestamps:true});

/*
Define collections
*/

module.exports=mongoose.model('user',userschema)