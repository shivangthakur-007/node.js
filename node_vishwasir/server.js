const express=require('express');
const server=require('./config/server.config');
const mongoose=require('mongoose')
const app=express();
const dbconfig=require('./config/db.config');
const usermodel=require('./models/user.model')
const bcrypt=require('bcrypt')
// const {init}=require('./models/user.model')

/*
logic to connect to mongodb and create an
need to have mongodb up and running in the local machine
*/

mongoose.connect(dbconfig.db_url);
const db=mongoose.connection;

// It is used to error handling in node.js  |Atlas is swiggy just like giving service.
db.on('error',()=>{
    console.log('Error while connecting to db')
})
db.once('open', ()=>{
    console.log('db is connected')
    init();
})

async function init(){
    // Initialize the mongodb
    // Need to creae the admin user.
    // check if admin is present or not
    let admin=usermodel.findOne({
        userid:'admin'
    });
    if(admin){
        console.log('Admin is already present')
        return;
    }
n
   admin= await usermodel.create( {
        name:'vishwa mohan',
        userid:'admin',
        email:'kankvish@gmail.com',
        password:bcrypt.hashSync('new123'),
        usertype:'Admin',
    });
    console.log(admin);
}


app.listen(server.PORT,()=>{
    console.log(`app is running on ${server.PORT}`)
})