const fs = require('fs');
const {data} = require('./data');
fs.writeFile('copy.text', 'Hello World', (err) =>{
    if(err){
        return;
    }
    console.log('file create successfully');
});
fs.readFile('data.js' , 'utf-8' , (err, data) =>{
    if(err){
        return;
    }
    fs.writeFile('readData.js', data ,(err) =>{
        if(err){
            return
        }
        console.log('data store readData');
        
    })
    console.log('data read done');
    
});

