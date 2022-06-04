import {fileURLToPath} from "url";
import path from "path";
import { opendir} from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const listFolderPath = path.join(__dirname, "/files")

export const list = async () => {
    let filesArr = [];
    try {
        const listFolder = await opendir(listFolderPath);
        for await (const file of listFolder){
           filesArr.push(file.name)
        }
        console.log(filesArr)
    } catch {
        throw Error("FS operation failed")
    }
};
//list()