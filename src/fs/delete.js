// https://discord.com/channels/755676888680366081/1198683965922488461/1201370103216873482

import { unlink } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Determine the current working directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    // Write your code here 
    // Create a path to the file to be deleted
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');
    try {
        // Delete the file
        await fs.unlink(filePath);
        console.log(`File ${filePath} has been deleted.`);
    } catch (error) {
        // If there is an error, throw an error
        throw new Error('FS operation failed');
    }
};

await remove();