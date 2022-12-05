import path from 'path';
import { fileURLToPath } from 'url';
import { access, constants, rm as removeFile } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __fileToDelete = path.dirname(__filename) + '/files/fileToRemove.txt';
const __errorMessage = 'FS operation failed';

const remove = async () => {
    try {
        const ifFileExist = 
            await access(__fileToDelete, constants.R_OK)
                .then(value => true)
                .catch(err => false);

        if(!ifFileExist){
            throw Error(__errorMessage);
        }else{
            await removeFile(__fileToDelete);
        }
    }catch (e) {
        console.log(e.message);
    }
};

await remove();