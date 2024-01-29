import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';


// Determine the current working directory
const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    // Write your code here 
    // Create a path to the file to be read
    // https://stackoverflow.com/questions/46867517/how-to-read-file-with-async-await-properly
    const filePath = join(__dirname, 'fileToRead.txt');
    try {
        // Read the file
        const data = await readFile(filePath, 'utf8');
        console.log(data);
    } catch (error) {
        // If there is an error, throw an error
        throw new Error('FS operation failed');
    }
};


await read();