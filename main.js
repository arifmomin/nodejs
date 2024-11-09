// const fs = require('fs');
// fs.mkdir('nodeJs', (err) =>{
//     if(err){
//         return
//     }
//     console.log('nodeJS Folder Crete sucessfully');
// });
// fs.writeFile('nodeJs/index.html', ' Hello World ', (err) =>{
//     if(err){
//         return
//     }
//     console.log('index.html file create successfully'); 
// })
// fs.mkdir('nodeJs/Css', (err) =>{
//     if(err){
//         return;
//     }
//     console.log('css folder create succesfully');

    
// });
// fs.writeFile('nodeJs/Css/style.css', 'Hello', (err) =>{
//     if(err){
//         return
//     }
//     console.log('css file create successfully');
    
// });
// fs.mkdir('nodeJs/js', (err) =>{
//     if(err){
//         return
//     }
//     console.log('js folder create successfully');
    
// })
// fs.writeFile('nodeJs/js/script.js', ' Hello World ',  (err) =>{
//     if(err){
//         return
//     }
//     console.log('script file create successfully');
    
// });
// fs.readFile('main.js', 'utf-8' ,(err, data) =>{
//     if(err){
//         return
//     }
//     console.log('main.js file read done');
//     fs.writeFile('nodeJs/js/script.js', data, (err) =>{
//         if(err){
//             return
//         }
//         console.log('main.js to script file data transfer successfully');
//     })
// })
// fs.unlink('main.js', (err) =>{
//     if(err){
//         return
//     }
//     console.log('main.js file deleted');
    
// })


// ===============for loop dia multiple folder create 
// const fs = require('fs');
// let folder = ['js', 'style', 'index'];
// for(let i = 0; i < folder.length; i++){
//     fs.mkdir(folder[i], (err) =>{
//         if(err){
//             return
//         }
//         console.log('folder create successfully');
// ====================foler name change ===================
//         fs.rename('index', 'html' ,(err) =>{
//             if(err){
//                 return
//             }
//             console.log('rename file successfully');
            
//         })
//     })
// }

// const fs = require('fs');

// fs.writeFile('hello.text', 'Hello World', (err) =>{
//     if(err){
//         return
//     }
//     console.log('write data successfully');
    
// })
// fs.readFile('hello.text', 'utf-8', (err, data) =>{
//     if(err){
//         return
//     }
//     console.log('data read successfull');
    
// })



// ==============================path basename module 
// const path = require('path');
// const url = 'https://nodejs.org/api/path.html';
// console.log(path.basename(url));

// ====================path direname module
// const path = require('path');
// const url = 'https://nodejs.org/api/path.html';
// console.log(path.dirname(url));

// =========================path extname 
// const path = require('path');
// const url = 'https://nodejs.org/api/path.html';
// console.log(path.extname(url));

// =========================path formate
// const path = require('path');
// const newPath = path.format({
//     root: '',
//     dir: 'https://arifmomin.shakil',
//     base: '/portfolio.com',
// }).replace(/\\/g, '');
// console.log(newPath);
// ==============================path parse 
// const path = require('path');
// const url = 'https://nodejs.org/api/path.html';
// console.log(path.parse(url));

// =======================path normalize 
// const path = require('path');
// const url = 'https://arifmomin.shakil/portfolio.com'
// let newPath = path.format({
//     root: '',
//     dir: 'https://arifmomin/shakil',
//     base: '/portfolio.com'
// })
// console.log(path.normalize(newPath));

// =======================path join
// const path = require('path');
// let url = 'https://arifmomin/'
// let newjoinPath =  path.join(url, 'verify')
// console.log(path.normalize(newjoinPath));

// =============================url 
// var url = require('url');
// var ad =  'http://localhost:978979/arifmomin.js/?sdf=sdfs.com'
// console.log(url.parse(ad, true));
