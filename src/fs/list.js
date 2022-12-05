import path from 'path';
import { fileURLToPath } from 'url';
import { access, constants, readdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __folderToList = path.dirname(__filename) + '/files';
const __errorMessage = 'FS operation failed';

const list = async () => {
    try {
        const ifFolderExist = 
            await access(__folderToList, constants.R_OK)
                .then(value => true)
                .catch(err => false);

        if(!__folderToList){
            throw Error(__errorMessage);
        }else{
            await readdir(__folderToList).then(files => {
                console.log(files);
            })
        }
    }catch (e) {
        console.log(e.message);
    }
};

await list();