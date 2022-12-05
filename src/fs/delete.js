import fs from 'fs';

const remove = async () => {
    fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
        if (err) throw Error('FS operation failed');
        console.log('Файл успешно удален');
    });
};

await remove();