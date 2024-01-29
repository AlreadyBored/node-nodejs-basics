import fs from 'fs';
import path from 'path';

const copy = async () => {
    // Write your code here 
    function copyFolderSync(from, to) {
        // Check if the source folder exists
        if (!fs.existsSync(from)) {
            throw new Error('FS operation failed');
        }
        // Check if the destination folder exists
        if (fs.existsSync(to)) {
            throw new Error('FS operation failed');
        }
        // Create the destination folder
        fs.mkdirSync(to);
        // Read the files in the folder
        fs.readdirSync(from).forEach(element => {
            // If the element is a file, copy it to the destination folder
            if (fs.lstatSync(path.join(from, element)).isFile()) {
                // Copy the file
                fs.copyFileSync(path.join(from, element), path.join(to, element));
            } else {
                // if the element in the folder is a directory, copy it to the destination folder
                copyFolderSync(path.join(from, element), path.join(to, element));
            }
        });
    }
    // Copy the 'files' folder to the 'files_copy' folder
    copyFolderSync('./files', './files_copy');
};

await copy();
