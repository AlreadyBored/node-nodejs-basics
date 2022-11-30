import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToRead = path.join(__dirname, "files");
    const pathToWrite = path.join(__dirname, "files_copy");
    fs.exists(pathToRead, (isExists) => {
        if (!isExists) throw (`FS operation failed`);
    });
    fs.exists(pathToWrite, (isExists) => {
        if (isExists) throw (`FS operation failed`);
    });
    fs.readdir(pathToRead, (err, files) => {
        if (err) throw err;
        fs.mkdir(pathToWrite, (err) => {
            if (err) throw err;
            for (let file of files) {
                let fullPathToRead = path.join(pathToRead, file);
                let fullPathToWrite = path.join(pathToWrite, file);
                fs.copyFile(fullPathToRead, fullPathToWrite, (err) => {
                    if (err) throw err;
                })
            }
        });
        console.log(files);
    });

};

await copy();