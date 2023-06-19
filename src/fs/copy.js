import fs from "fs";
import url from 'url';
import path from "path";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToCopy = path.join(__dirname, "files");
const pathToPaste = path.join(__dirname, "files-copy");

const copy = async () => {
    // fs.mkdir(pathToPaste, (err) => {
    //     if (err) {
    //         throw new Error("FS operation failed");
    //     }
    // });
    try{
        await fs.promises.cp(pathToCopy, pathToPaste, { recursive: true, force: false, errorOnExist: true })
    } catch (err){
        throw new Error('FS operation failed')
    }
};


await copy();
