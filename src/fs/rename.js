import {fileURLToPath} from "url";
import path from "node:path";
import * as fs from "fs";
import {access} from "fs/promises";
import {constants} from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const checkFileExists = async (filePath) => {
    return await access(filePath, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}
const rename = async () => {
    const filePath = path.join(__dirname,'files','wrongFilename.txt')
    const newFilePath = path.join(__dirname,'files','properFilename.md')

    if(await checkFileExists(newFilePath) || !(await checkFileExists(filePath))) {
        throw new Error('FS operation failed.')
    }
    try {
        await fs.rename(`${filePath}`, `${newFilePath}`,(err) => {
            if (err) throw err;
            console.log('Rename complete!');
        })
    } catch (renameError) {
        console.error(`FS operation failed: ${renameError.message}`)
    }


};

await rename();
