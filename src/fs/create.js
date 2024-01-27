import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const destinationFile = path.join(__dirname, 'files', 'fresh.txt')

const create = async () => {
    // Write your code here 
    try {
        await writeFile(destinationFile, 'I am fresh and young', {flag: 'wx'}) 
     
    } catch(err) {
      
        throw new Error('FS operation failed')
    }

   
};

await create();