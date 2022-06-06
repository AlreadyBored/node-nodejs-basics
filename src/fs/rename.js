import fs from 'fs';

export const rename = async () => {
    fs.rename('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
        if (err) throw Error('FS operation failed');
        console.log('Файл переименован');
    });
    
};

rename()