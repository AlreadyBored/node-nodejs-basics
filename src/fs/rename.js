import * as fs from 'fs';
import * as path from 'path';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const rename = async () => {
    fs.rename(FilePath, path.join(__dirname, 'files', 'properFilename'), (err) => {
        if (err) throw Error('FS operation failed');
    });
};

await rename();