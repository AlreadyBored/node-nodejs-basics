import * as url from 'url';
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    let filesFolderPath = path.resolve(__dirname, "./files");
    let filesFolderCopyPath = path.resolve(__dirname, "./files_copy");
    let errorMessage = "FS operation failed";

    try{
        await fsPromises.access(filesFolderPath, fs.constants.R_OK);
    }catch(err){
        throw new Error(errorMessage);
    }

    try{
        await fsPromises.mkdir(filesFolderCopyPath);
        let files = await fsPromises.readdir(filesFolderPath);

        files.forEach( async (file) => {
            await fsPromises.copyFile(path.join(filesFolderPath, file), path.join(filesFolderCopyPath, file));
        });
    }catch(err){
        throw new Error(errorMessage);
    }
};

copy();