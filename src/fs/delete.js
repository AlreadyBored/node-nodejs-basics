import fs from "fs/promises";
import path from "path";
const remove = async () => {
    const deleteFilePath = path.join(import.meta.dirname,'files','fileToRemove.txt');
    try {
        await fs.rm(deleteFilePath);
    }catch (err){
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }else {
            throw err
        }
    }
};

await remove();
