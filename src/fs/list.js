import { promises as fs } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {    
    try {
        const pathToFolder = path.join(__dirname, 'filess');

        // check 
        await fs.access(pathToFolder);

        const result = await fs.readdir(pathToFolder);  

        console.log(result);
        
    } catch (error) {
        throw new Error(`FS operation failed ${error.message}`)
    }
};

await list();