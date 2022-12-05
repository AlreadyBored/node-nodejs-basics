import { createWriteStream } from 'node:fs'
import path from 'path';
import { fileURLToPath } from 'url';
import { access, constants } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __fileToWrite = path.dirname(__filename) + '/files/fileToWrite.txt';
const __errorMessage = 'STREAMS operation failed: file not found';

const write = async () => {
    try{
        const ifFileToWriteExists = 
            await access(__fileToWrite, constants.R_OK)
                .then(value => true)
                .catch(err => false)

        if(!ifFileToWriteExists){
            throw Error(__errorMessage);
        }

        const writeFile = createWriteStream(__fileToWrite);

        process.stdin.pipe(writeFile);
    }catch(e){
        console.error(e.message);
    }
};

await write();