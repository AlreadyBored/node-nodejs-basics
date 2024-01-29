// https://discord.com/channels/755676888680366081/1198683965922488461/1201370103216873482

import { unlink } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Determine the current working directory
const __dirname = dirname(fileURLToPath(import.meta.url));


// https://byby.dev/node-delete-file#:~:text=const%20fs%20%3D%20require(%27fs%27).promises%3B%0A%0Aasync%20function%20deleteFile(filePath)%20%7B%0A%20%20try%20%7B%0A%20%20%20%20await%20fs.unlink(filePath)%3B%0A%20%20%20%20console.log(%60File%20%24%7BfilePath%7D%20has%20been%20deleted.%60)%3B%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.error(err)%3B%0A%20%20%7D%0A%7D%0A%0AdeleteFile(%27file.txt%27)%3B
const remove = async () => {
    // Write your code here 
    // Create a path to the file to be deleted
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');
    try {
        // Delete the file
        await unlink(filePath);
        console.log(`File ${filePath} has been deleted.`);
    } catch (error) {
        // If there is an error, throw an error
        throw new Error('FS operation failed');
    }
};

await remove();