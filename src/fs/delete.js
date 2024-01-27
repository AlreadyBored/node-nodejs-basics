import { unlink } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const destinationFile = path.join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
    // Write your code here 
    try{
        await unlink(destinationFile)
    }catch(err) {
        throw new Error('FS operation failed')
    }
};

await remove();