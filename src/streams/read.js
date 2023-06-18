import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dirContext = 'files';
const fileToRead = 'fileToRead.txt';
const fileErrorMessage = 'FS operation failed';
const encoding = 'utf8';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const fileToReadPath = path.join(__dirname, dirContext, fileToRead);

    // check file presence
    fs.access(fileToReadPath, fs.F_OK, (err) => {
        if (err) {
            // file is not found.
            throw new Error(fileErrorMessage);
        }
      
        // Read from a file as a stream.
        var reader  = fs.createReadStream(fileToReadPath, encoding);
        // On read write into 'process.stdout'
        reader.on("data", function (data) {
            process.stdout.write(data);
        });      
    });
};

await read();