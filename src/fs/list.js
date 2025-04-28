import { promises as fs } from 'fs';
import { join } from 'path';



const list = async () => {
    // Write your code here 
    const folderPath = join('files');

    try {
        
        await fs.access(folderPath);

        const files = await fs.readdir(folderPath);
        console.log(files)
    } catch (error) {

        throw new Error('FS operation failed');
        
    }
};

await list();