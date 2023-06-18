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
      
        fs.readFile(fileToReadPath, encoding, (err, text) => {
            if (err) {
                // Smth scary happened.
                throw new Error(fileErrorMessage);
            } 

            console.log(text);
          });        
    });
};

await read();