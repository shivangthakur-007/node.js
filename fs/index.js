var fs=require("fs");
// 
// fs.readFile('input.txt',function(err,data){
// if(err){
//     return console.log(err);
// }
// console.log("asnynchronous read: " + data.toString());
// })

// var data=fs.readFileSync('input.txt');
// console.log("Synchronous read: "+ data.toString());

// console.log("...opening");
// fs.open('input.txt', 'r+', function(err, data){
//     if(err){
//       return  console.log(err);
//     }
//     console.log("file open successfully")
// })

// var buf=new Buffer(1024);
// console.log("opening an existing file")
// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//       return  console.log(err)
//     }
//     console.log("file opened successfully")
//     console.log("reading the file")
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//         if(err){
//       return  console.log(err)
//     }
//     console.log(bytes+ " bytes read")
    
//     if(bytes>0){
//         console.log(buf.slice(0, bytes).toString())
//     }
// });
// })

// console.log("writting into existing files")
// fs.writeFile('input.txt','Not a man',function(err){
// if (err) {
//     return console.log(err)
// }
// console.log("Written data successfully")
// fs.readFile('input.txt',function(er,data){
//     if(er){
//         return console.error(er)
//     }
// console.log("Asynchronous read: "+ data.toString())
// })
// })

// var data='\nlearn node.js';
// fs.appendFile('input.txt',data, 'utf8', function(err){
//     if(err)throw err;
//     console.log("data is append successfully")
// })

// fs.close(fd,function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log("file closed successfully")
// })

// console.log("..deleting")
// fs.unlink('input.txt', function(err){
//     if(err){
//         return console.log(err)
//     }
//     console.log("file deleted successfully")
// })
