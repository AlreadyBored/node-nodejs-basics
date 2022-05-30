import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const remove = async () => {
    const PATH_TO_FILE =  __dirname + "/files/fileToRemove.txt";

    if (!fs.existsSync(PATH_TO_FILE)){
        throw new Error("FS operation failed")
    }
    else{
        await fs.rmSync(PATH_TO_FILE);
    }
};

await remove();