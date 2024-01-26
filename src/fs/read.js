import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, readFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            readFile(filePath, ((err, data) => {
                if(err) throw err
                console.log(Buffer.from(data).toString())
            }))
        }
    })
};

await read();