import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, readdir } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = join(__dirname, 'files');

const list = async () => {
    access(folderPath, constants.F_OK, (err) => {
        if(err) {
            throw new Error('FS operation failed'); 
        } else {
            readdir(folderPath, ((err, files) => {
                if(err) throw err
                files.forEach((item) => console.log(item))
            })
            ) 
        }
    })
};

await list();