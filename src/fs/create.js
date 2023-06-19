import * as fs from 'fs/promises';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const filePath = `${dirname(fileURLToPath(import.meta.url))}/files/fresh.txt`;
    
    fs.access(filePath, fs.constants.R_OK)
        .then(() => {
            let error = new Error('FS operation failed')
            console.log(error)
        })
        .catch((error) => {
            error = null;
            fs.writeFile(filePath, 'I am fresh and young')
        })   
    
};

await create();