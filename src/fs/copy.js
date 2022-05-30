import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const copy = async () => {
    const PATH_TO_FILES_FOLDER =  __dirname + "/files";
    const PATH_TO_FILES_COPY_FOLDER = PATH_TO_FILES_FOLDER+ "_copy";
    if (!fs.existsSync(PATH_TO_FILES_FOLDER) ||fs.existsSync(PATH_TO_FILES_COPY_FOLDER) ){
        throw new Error("FS operation failed")
    }
    else{
        await fs.promises.cp(PATH_TO_FILES_FOLDER,PATH_TO_FILES_COPY_FOLDER, {recursive: true})
    }
};


await copy();