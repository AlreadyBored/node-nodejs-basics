import { promises as fs } from 'fs';
import { join } from 'path';


const remove = async () => {
    // Write your code here 
    const filePath = join('files', 'fileToRemove.txt');

    try {
       
        await fs.access(filePath);

        await fs.unlink(filePath);

    } catch (error) {
        
        throw new Error('FS operation failed');
    }
};

await remove();