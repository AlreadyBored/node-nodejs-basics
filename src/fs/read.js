import {fileURLToPath} from "url";
import path from "node:path";
import {access} from "fs/promises";
import {constants} from "fs";
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkFileExists = async (filePath) => {
    return await access(filePath, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

const read = async () => {
    const filePath = path.join(__dirname,'files','fileToRead.txt')
    if(!(await checkFileExists(filePath))) {
        throw new Error('Fs operation failed')
    }
    try {
        await fs.readFile(filePath,'utf-8',(err, data) => {
            console.log(data)
            if(err) console.error(err)
        })
    } catch (readError) {
        console.error(readError)
    }
};

await read();
