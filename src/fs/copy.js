import { fileURLToPath } from "url";
import { dirname } from "path";
import { readdir, copyFile, mkdir} from "fs/promises";


const copy = async () => {
    // Write your code here 
    const filePath = fileURLToPath(import.meta.url);
    const dirPath = dirname(filePath) + "/files";
    const copyDirPath = dirname(filePath) + "/files_copy";
    const errMsg = 'FS operation failed'

    try {
       const originFiles = await readdir(dirPath);
       await mkdir(copyDirPath);
       await Promise.all(
        originFiles.map((i) => copyFile(`${dirPath}/${i}`, `${copyDirPath}/${i}`))
       )
    } catch(err) {
        throw new Error(errMsg);
    }
};

await copy();
