import asyncFs from "fs/promises";
import path from "path";

const fileToDeletePath = path.join(process.cwd(),'src/fs/files/fileToRemove.txt')

const remove = async () => {
    try {
        await asyncFs.rm(fileToDeletePath, { recursive: false, force: false });
        console.log('File removed successfully');
    } catch (e) {
        // If the error is ENOENT, the file does not exist
        if (e.code === 'ENOENT') {
            throw new Error('FS operation failed: fileToRemove.txt does not exist');
        } else {
            // Rethrow other potential errors
            throw e;
        }
    }
};



await remove();


// await remove();