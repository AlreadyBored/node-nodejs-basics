import { readFile, existsSync } from 'node:fs';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const read = async () => {
    const targetFile = join(__dirname,'/files/fileToRead.txt');

    readFile(targetFile, {flag:'r', encoding:'utf-8'},(err,data) =>{
        if (err){
            throw new Error('FS operation failed!');
        }

        console.log(data);
    })
};

await read();