import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const filePath = 'files/fileToCalculateHashFor.txt';
const fileErrorMessage = 'FS operation failed';
const encoding = 'utf8';

const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToReadPath = path.join(__dirname, filePath);

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

            const hashNode = val =>
              new Promise(resolve =>
                setTimeout(
                  () => resolve(crypto.createHash('sha256').update(val).digest('hex')),
                  0
                )
              );
              
            hashNode(text).then(console.log);
          });        
    });
};

await calculateHash();