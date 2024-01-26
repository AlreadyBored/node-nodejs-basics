import { throwError } from "./error.js";
import { access, rename as renameFile } from 'fs/promises';

const rename = async () => {
    try {
        const WRONG_FILE_NAME = 'wrongFilename.txt',
            PROPER_FILE_NAME = 'properFilename.md',
            PATH = './files'

        
        await access(`${PATH}/${PROPER_FILE_NAME}`)
            .then(() => {
                console.log('file exist')
                throwError()
            }).catch(() => {})

        await renameFile(`${PATH}/${WRONG_FILE_NAME}`,`${PATH}/${PROPER_FILE_NAME}`)

    } catch(error) {
        throwError()
    }
};

await rename();