import { createReadStream } from 'node:fs'
import path from 'path';
import { fileURLToPath } from 'url';
import { access, constants } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __fileToRead = path.dirname(__filename) + '/files/fileToRead.txt';
const __errorMessage = 'STREAMS operation failed: file not found';

const read = async () => {
    try{
        const ifFileToReadExists = 
            await access(__fileToRead, constants.R_OK)
                .then(value => true)
                .catch(err => false)

        if(!ifFileToReadExists){
            throw Error(__errorMessage);
        }

        const readFile = createReadStream(__fileToRead);

        readFile.pipe(process.stdout);
    }catch(e){
        console.error(e.message);
    }
};

await read();