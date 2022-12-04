import path from 'path';
import { fileURLToPath } from 'url';
import { access, constants, readFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __fileToRead = path.dirname(__filename) + '/files/fileToRead.txt';
const __errorMessage = 'FS operation failed';

const read = async () => {
    try {
        const ifFileExist = 
            await access(__fileToRead, constants.R_OK)
                .then(value => true)
                .catch(err => false);

        if(!ifFileExist){
            throw Error(__errorMessage);
        }else{
            const contents = await readFile(__fileToRead, { encoding: 'utf8' });
            console.log(contents);
        }
    }catch (e) {
        console.log(e);
    }
};

await read();