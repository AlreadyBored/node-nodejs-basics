import { rename as renameFile, access, constants } from 'node:fs/promises';
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcFile = path.join(__dirname, 'files', 'wrongFilename.txt')
const destFile = path.join(__dirname, 'files', 'properFilename.md')

const rename = async () => {
    // Write your code here 
    try {
        const exists = await access(destFile, constants.F_OK);
        if(exists === undefined){
            throw new Error('FS operation failed')
        }
    } catch(err){

        if(err.code === 'ENOENT'){
            await renameFile(srcFile,destFile)
        }else{
           
            throw new Error('FS operation failed')
        }
        
    }

};

await rename();