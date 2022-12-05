import path from 'path';
import { fileURLToPath } from 'url';
import { access, appendFile, constants } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __newFilePath = path.dirname(__filename) + '/files/fresh.txt';
const __newFileContent = 'I am fresh and young';
const __errorMessage = 'FS operation failed';

const create = async () => {
    try {
        const ifFileExists = 
            await access(__newFilePath, constants.R_OK)
                .then(value => true)
                .catch(err => false)

        if(ifFileExists){
            throw Error(__errorMessage);
        }else{
            await appendFile(__newFilePath, __newFileContent);
        }
    }catch (e) {
        console.log(e.message);
    }

};

await create();