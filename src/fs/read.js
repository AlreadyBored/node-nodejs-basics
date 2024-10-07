import * as fs from 'fs';
import * as path from 'path';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'fileToRead.txt');
const read = async () => {
    fs.readFile(FilePath, 'utf8', function(err, data) {
        if (err) throw Error('FS operation failed');
        console.log(data)
    });
};

await read();