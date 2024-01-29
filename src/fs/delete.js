import { cpSync, existsSync, renameSync, unlink, unlinkSync, writeFileSync } from "fs";

const remove = async () => {
    try {
        unlinkSync("src/fs/files/fileToRemove.txt")
        } catch (error){
            throw Error(`FS operation failed: ${error}`)
        }
    };

await remove();