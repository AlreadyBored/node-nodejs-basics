import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const list = async () => {
    const PATH_TO_FOLDER =  __dirname + "/files/";

    if (!fs.existsSync(PATH_TO_FOLDER)){
        throw new Error("FS operation failed")
    }
    else{
        console.log( await fs.promises.readdir(PATH_TO_FOLDER));
    }
};

await list();


