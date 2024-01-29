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

const copy = async () => {
    const folderToCopy = path.join(__dirname,'files')
    const folderToPaste = path.join(__dirname,'files_copy')

    if(await checkFileExists(folderToPaste) || !(await checkFileExists(folderToCopy))) {
        throw new Error('FS operation failed.')
    }
    try {
        await fs.cp(folderToCopy, folderToPaste, { recursive: true }, (err) => {
            if (err) {
                console.error(err);
            }
        });
    } catch (copyError) {
        console.log(copyError.message)
    }
};

await copy();
