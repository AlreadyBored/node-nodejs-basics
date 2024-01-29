import fs from 'fs';

const rename = async () => {
    const dir = './src/fs/files';
    if(!fs.existsSync(dir+"/wrongFilename.txt")){
        throw "FS operation failed: file wrongFilename do not exist"
    }
    if(fs.existsSync(dir+"/properFilename.md")){
        throw "FS operation failed: The file has already been created"
    }
    fs.rename(dir+'/wrongFilename.txt', dir+'/properFilename.md', err => {
        if(err) throw err; // не удалось переименовать файл
        console.log('Файл успешно переименован');
    }); 
};

await rename();