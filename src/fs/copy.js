import fs from 'fs/promises'; 
import path from 'path'; 

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    // Write your code here 

    const sourceDir = path.join(__dirname, 'files'); 
    const destDir = path.join(__dirname, 'files_copy'); 

    try {
        // check if directory exists
        await fs.access(sourceDir);
    } catch (error) {
        throw new Error('FS operation failed'); 
    }

    try {
        // check if destination already exists
        await fs.access(destDir);
        throw new Error('FS operation failed'); 
    } catch (error) {
        // ENOENT === the directory does not exist
        // unexpected errors
        if (error.code !== 'ENOENT') { 
            throw new Error('FS operation failed'); 
        }
    }

    // read all files and directories from source directory
    const files = await fs.readdir(sourceDir);

    // create the destination directory
    await fs.mkdir(destDir);

    // copy each file to the destination directory
    await Promise.all(
        files.map(async (file) => {
            const srcFile = path.join(sourceDir, file); // Source file path
            const destFile = path.join(destDir, file); // Destination file path

            // copy 
            await fs.copyFile(srcFile, destFile);
        })
    );

    console.log('Files copied successfully');
};

await copy();
