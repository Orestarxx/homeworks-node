const fs = require('node:fs');
// fs.readFile('./text.txt',(err, data) =>{
//     console.log(err);
//     console.log(data.toString());
// })
// fs.appendFile('./text.txt','Hello Orest!Nice to meet you\n',(err)=>{
//
// })
// fs.writeFile('./text.txt','My name is Orest',(err) =>{
//
// })
// fs.readFile('./text.txt',(err,data) =>{
//     fs.appendFile('./copy.txt',data,(err) =>{
//
//     })
// })
// fs.mkdir('./comp', (err) =>{
//
// })
// fs.appendFile('./comp/data.json',JSON.stringify({name:'Arest',age:22}),(err) =>{
// })
// fs.unlink('./comp/data.json',(err) =>{})
// fs.rmdir('./comp',{recursive:true},(err) =>{
//     console.log(err);
// })
fs.copyFile('./text.txt','./copy.txt', (err) =>{
    console.log(err);
})








// node app.js