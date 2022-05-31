import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const read = async () => {

    const PATH_TO_FILE =  __dirname + "/files/fileToRead.txt";

    try {
        console.log(await fs.promises.readFile(PATH_TO_FILE,"utf8"));
    } catch {
        throw new Error("FS operation failed");
    }
};

await read();