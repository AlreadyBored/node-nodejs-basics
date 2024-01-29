import fs from 'fs';

const read = async () => {
    const file = './src/fs/files/fileToRead.txt';
    if(!fs.existsSync(file)){
        throw "FS operation failed: file do not exist"
    }
    fs.readFile(file, function(error, data){
        if(error) {  // если возникла ошибка
            return console.log(error);
        }
        console.log(data.toString());
    });
};

await read();