import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dirContext = 'files';
const fileToRename = 'wrongFilename.txt';
const fileNewName = 'properFilename.md';
const fileErrorMessage = 'FS operation failed';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const renameFilePath = path.join(__dirname, dirContext, fileToRename);
    const newNameFilePath = path.join(__dirname, dirContext, fileNewName);

    // check rename-file presence
    fs.access(renameFilePath, fs.F_OK, (err) => {
        if (err) {
            // file is not found.
            throw new Error(fileErrorMessage);
        }
      
        // Check target-file (absence).
        fs.access(newNameFilePath, fs.F_OK, (err) => {
            if (!err) {
                // file is found.
                throw new Error(fileErrorMessage);
            }

            // Let's rename it.

            fs.rename(renameFilePath, newNameFilePath, (err) => {
                if (err) {
                    // Smth scary happened.
                    throw new Error(fileErrorMessage);
                } 

                // File renamed.
            });            
      });
    });
};

await rename();