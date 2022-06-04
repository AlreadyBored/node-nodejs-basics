import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

export const remove = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err)
        }
        return resolve()
    }))
};
remove(path.join(__dirname, 'files', 'fileToRemove.txt'))
    .then( rej => console.log('File deleted'))
    .catch( err => {
        process.stderr.write('FS operation failed. File not found');
        process.exit(1);
    })
