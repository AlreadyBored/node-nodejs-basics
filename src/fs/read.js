import * as fs from 'fs';
import * as path from 'path';
// import fsPromises from 'fs/promises'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


export const read = async (path) => {
    return new Promise((resolve, reject) =>
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        }))
};

read(path.resolve(__dirname, 'files', 'fileToRead.txt'))
    .then(data => console.log(data))
    .catch(err => {
        process.stderr.write('FS operation failed. File not found');
        process.exit(1);
    })
