import {fileURLToPath} from "url";
import {access} from "fs/promises";
import {constants} from "fs";
import path from "node:path";
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkFileExists = async (filePath) => {
    return await access(filePath, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

const remove = async () => {
    const filePath = path.join(__dirname,'files','fileToRemove.txt')
    if(!(await checkFileExists(filePath))) {
        throw new Error('FS operation failed')
    }
    try {
        await fs.unlink(filePath, ()=> {
            console.log('file was deleted')
        })
    } catch (deleteError) {
        console.error(deleteError)
    }

};

await remove();
