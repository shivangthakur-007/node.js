import app from "./app.js"
const port = 3000

// database connection
// database always present in another continent
// database connection may fail

// import mongoose from "mongoose"
// mongoose.connect(' mongodb://127.0.0.1:27017/test')

// ()() =>iffy immediate callback
(async()=>{
try {
   await mongoose.connect("dbstring")
   console.log("DB connected successfully")

   app.on("error",(err)=>{
    console.log("Error: ", err)
    throw err;
    const onlistening=()=>{
        console.log(`Listening on port ${port} successfully`)
    }
    app.listen(port,onlistening);
   })
} catch (error) {
    console.log("error")
    throw error;
}
})()
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })