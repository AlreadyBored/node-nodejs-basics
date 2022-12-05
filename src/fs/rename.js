import * as url from 'url';
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    let wrongFilePath = path.resolve(__dirname, "./files", "wrongFilename.txt");
    let correctFilePath = path.resolve(__dirname, "./files", "properFilename.md");
    let errorMessage = "FS operation failed";

    try{
        await fsPromises.access(correctFilePath, fs.constants.R_OK);
        throw new Error(errorMessage);
    }catch(err){
        if(err.message === errorMessage){
            throw new Error(errorMessage);
        }else{
            try{
                await fsPromises.rename(wrongFilePath, correctFilePath);
            }catch(err){
                throw Error("FS operation failed");
            }
        }
    }
};

await rename();