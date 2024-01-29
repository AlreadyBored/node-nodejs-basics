import fs, { existsSync } from 'fs';

const rename = async () => {
    try {
        if (!fs.existsSync('./files/properFilename.md')) {
            fs.promises.rename('./files/wrongFilename.txt', './files/properFilename.md');
        }
    } catch (err) {
        console.error('Something went wrong!');
    }
    
};

await rename();