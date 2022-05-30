import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const create = async () => {
    const PATH_TO_FILE =  __dirname + "/files/fresh.txt";

    if (fs.existsSync(PATH_TO_FILE)){
        throw new Error("FS operation failed")
    }
    else{
        await fs.promises.writeFile(PATH_TO_FILE,"I am fresh and young");
    }
};


await create();