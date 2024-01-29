import fs from 'fs';

const remove = async () => {
    const file = './src/fs/files/fileToRemove.txt';
    if (!fs.existsSync(file)){
        throw "FS operation failed: file do not exist";
    }
    fs.unlink(file, err => {
        if(err) throw err; // не удалось удалить файл
        console.log('Файл успешно удалён');
    });
};

await remove();