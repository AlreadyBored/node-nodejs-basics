import { readdir } from 'node:fs/promises'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const destinationFile = path.join(__dirname, 'files')

const list = async () => {
    // Write your code here 
    try{

        const fileList = await readdir(destinationFile)
        console.log(fileList)
    }catch(err){
        throw new Error('FS operation failed')
    }
};

await list();