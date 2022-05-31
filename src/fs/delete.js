import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const remove = async () => {
    const PATH_TO_FILE =  __dirname + "/files/fileToRemove.txt";
    fs.promises.access(PATH_TO_FILE).then(()=> {
        fs.promises.rm(PATH_TO_FILE).catch(e=> {throw e});

    }).catch(()=>{
        throw new Error("FS operation failed")
    })
};

await remove();