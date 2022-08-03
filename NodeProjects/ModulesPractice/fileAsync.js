const {readFile, writeFile} = require('fs');


//Argument: fileLocation, encoding, callBackFunction(error, resultOfFile)
readFile('./content/first.txt', 'utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt','utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result_async.txt', `Here is file: ${first}\n${second}`,
        (err, result)=>{
            if(err){
                console.log(`Write error: ${err}`);
                return;
            }
            console.log(result);

        });
        
    })
});