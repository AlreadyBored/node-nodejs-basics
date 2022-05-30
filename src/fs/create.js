import fs from 'fs';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const create = async () => {
    fs.readdir(`${__dirname}/files`, (error, data) => {
        if (data.includes('fresh.txt')) throw new Error('FS operation failed');
        else {
            fs.writeFile(`${__dirname}/files/fresh.txt`, 'I am fresh and young', (err) => {
                console.log(err ? err.message : 'File created');
            })
        }
    })
};

create();