import { rename as changeName, existsSync } from 'node:fs';

const rename = async () => {

    if (existsSync('./files/properFilename.txt') || !existsSync('./files/wrongFilename.txt')) {
        throw 'FS operation failed';
    }
    
    changeName('./files/wrongFilename.txt', './files/properFilename.txt', function (err) {
        if (err) throw err;
    });
};

await rename();