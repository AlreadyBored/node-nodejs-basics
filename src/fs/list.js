import fs from 'fs';

const list = async () => {
    const dir = './src/fs/files';
    fs.readdir(dir, (err, files) => {
        if(err) throw err;
        if(!files.length) throw "FS operation failed: files do not exist";
        for (let file of files){
            console.log(file);
        }
    })
};

await list();