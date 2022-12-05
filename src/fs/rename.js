import path from 'path';
import { fileURLToPath } from 'url';
import { access, constants, rename as renameFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __oldPath = path.dirname(__filename) + '/files/wrongFilename.txt';
const __newPath = path.dirname(__filename) + '/files/properFilename.md';
const __errorMessage = 'FS operation failed';

const rename = async () => {
    try {
        const ifNewPathExists = 
            await access(__newPath, constants.R_OK)
                .then(value => true)
                .catch(err => false);

        const ifOldPathExists = 
                await access(__oldPath, constants.R_OK)
                    .then(value => true)
                    .catch(err => false);

        if(ifNewPathExists || !ifOldPathExists){
            throw Error(__errorMessage);
        }else{
            await renameFile(__oldPath, __newPath);
        }
    }catch (e) {
        console.log(e.message);
    }
};

await rename();