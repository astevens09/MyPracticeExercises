// console.log("console1");

// setTimeout(() => {
//     console.log("setTimeout5")
// }, 0);

// Promise.resolve().then(_=>console.log("console3"));

// Promise.resolve().then(_=>console.log("console4"));

// console.log("console2");


let {readFile} = require('fs');


// let getText = path=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path,'utf-8',(err, data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

// var delayMessage = (time)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve,time);
//     });
// }
// delayMessage(5000).then(_=>console.log("I did it"));

// getText('./content/first.txt').then(data=>{console.log(data)}).catch(err=>{console.log(err)});

// readFile('./content/first.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//         console.log(err);
//     }
// });