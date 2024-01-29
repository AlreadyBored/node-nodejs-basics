// https://www.geeksforgeeks.org/node-js-fs-readdir-method/
// https://hayageek.com/get-list-of-files-in-directory-in-nodejs/
import { readdir } from 'node:fs/promises'; // read the contents of a given directory
import { join } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Determine the current working directory
const __dirname = dirname(fileURLToPath(import.meta.url));
const list = async () => {
    // Write your code here 
    // Path to the 'files' directory
    const folderPath = join(__dirname, 'files');
    try {
        // Read the directory and get an array of file names
        const fileNames = await readdir(folderPath);
        // Print the array of file names
        console.log("List of files in the directory:", fileNames);
    } catch (error) {
        // If the directory doesn't exist - throw an error
        throw new Error('FS operation failed');
    }
};

await list();