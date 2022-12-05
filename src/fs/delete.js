import * as url from 'url';
import path from "path";
import fsPromises from "fs/promises";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    let removedFilePath = path.resolve(__dirname, "./files", "fileToRemove.txt");

    try{
        await fsPromises.rm(removedFilePath);
    }catch(err){
        throw new Error("FS operation failed");
    }
};

await remove();