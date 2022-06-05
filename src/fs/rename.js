import * as fs from 'fs';

export const rename = async () => {
    
    const existsError = new TypeError('FS operation failed')

    if (!fs.existsSync("files/wrongFilename.txt")) {
        return console.log(existsError.message);
    }
    if (fs.existsSync("files/properFilename.md")) {
        return console.log(existsError.message);
    }

    fs.rename("files/wrongFilename.txt", "files/properFilename.md", (err) => {
        if (err) {
            console.log(existsError.message);
        }
    } )
};

rename()