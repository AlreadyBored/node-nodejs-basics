import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dirContext = 'files';
const fileToDelete = 'fileToRemove.txt';
const fileErrorMessage = 'FS operation failed';


const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const filePath = path.join(__dirname, dirContext, fileToDelete);

    // check file presence
    fs.access(filePath, fs.F_OK, (err) => {
        if (err) {
            // file is not found.
            throw new Error(fileErrorMessage);
        }      
        
        // Let's delete it.

        fs.unlink(filePath, (err) => {
            if (err) {
                // Smth scary happened.
                throw new Error(fileErrorMessage);
            } 

            // File deleted.
        });
    });
};

await remove();