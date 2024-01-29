import path from "node:path";
import * as fs from "fs";
import {access} from "fs/promises";
import {constants} from "fs";


const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const checkFileExists = async (filePath) => {
    return await access(filePath, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}
const list = async () => {
    const filesFolder = path.join(__dirname, 'files');

    if(!(await checkFileExists(filesFolder))) {
        throw new Error('Fs operation failed')
    }
    try {
        await fs.readdir(filesFolder, (_, files) => {
            console.log(files)
        });
    } catch (listError) {
        console.error(listError.message)
    }
};

await list();
