import fs from 'fs';

export const remove = async () => {
    fs.unlink('./files/fileToRemove.txt', (err) => {
        if (err) throw Error('FS operation failed');
        console.log('Файл успешно удален');
    });
};

remove()