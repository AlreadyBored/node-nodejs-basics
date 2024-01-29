import fs from 'fs';

const copy = async () => {
    const dir = './src/fs/files';
    const dirCopy = './src/fs/files_copy';

    if(!fs.existsSync(dir)){
        throw "FS operation failed: folder files do not exist"
    }

    if(fs.existsSync(dirCopy)){
        throw "FS operation failed: The files_copy folder has already been created"
    }
    else{
        fs.mkdir(dirCopy, err => {
            if(err) throw err;
            console.log('Папка успешно создана');
        });
        fs.readdir(dir, (err, files) => {
            if(err) throw err;
            
            for (let file of files){
    
                fs.copyFile(dir+"/"+file, dirCopy+"/"+file, err => {
                    if(err) throw err;
                    console.log('Файл успешно скопирован');
                });
            }
        })
    }


};

await copy();
