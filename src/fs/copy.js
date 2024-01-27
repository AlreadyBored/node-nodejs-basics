
import { mkdir, opendir, copyFile } from 'node:fs/promises';

import path from 'node:path'
import { fileURLToPath } from 'node:url';


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filesFolder = path.join(__dirname, 'files')
const copy = async () => {
    // Write your code here 
    try {
        const dirToCopy = await opendir(filesFolder);
        const destFolder = new URL('./files_copy/', import.meta.url);
        await mkdir(destFolder);
        
        for await (const dirent of dirToCopy){
            const srcFile = path.join(__dirname, '/files',dirent.name )
            const destFile = path.join(__dirname, '/files_copy',dirent.name )
          

              await copyFile(srcFile, destFile);
        }
            
    } catch (err) {
   
        throw new Error('FS operation failed')
} 
};

await copy();