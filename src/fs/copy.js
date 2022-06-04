import {copyFile, mkdir, opendir} from 'fs/promises';
import {fileURLToPath} from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderToCopyPath = path.join(__dirname, "/files")
const copyFolderPath = path.join(__dirname, "/files_copy")

export const copy = async () => {
    try {
        const dirToCopy = await opendir(folderToCopyPath);
        const newDir = await mkdir(copyFolderPath, { recursive: true })

        for await (const file of dirToCopy){
            await copyFile(path.join(folderToCopyPath,file.name ),newDir + "/" +  file.name)
        }
    } catch(e) {
        console.log("FS operation failed");
    }
};
//copy()