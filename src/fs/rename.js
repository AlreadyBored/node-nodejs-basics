import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const rename = async () => {
    const OLD_FILE_NAME= "wrongFilename.txt";
    const NEW_FILE_NAME= "properFilename.md";

    const PATH_TO_FOLDER =  __dirname + "/files/";

    if (!fs.existsSync(PATH_TO_FOLDER + OLD_FILE_NAME) || fs.existsSync(PATH_TO_FOLDER + NEW_FILE_NAME)){
        throw new Error("FS operation failed")
    }
    else{
        await fs.promises.rename(PATH_TO_FOLDER + OLD_FILE_NAME, PATH_TO_FOLDER + NEW_FILE_NAME);
    }
};


await rename();