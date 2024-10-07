import fs from 'fs';

 // Set the path
const origin = new URL('files/', import.meta.url);
const destination = new URL('files_copy/', import.meta.url);
const copy = async () => {
    // Write your code here 
    // Validate if the orign folder exists and destination folder does not exist
    if (!fs.existsSync(origin) || fs.existsSync(destination)) {
        throw new Error('FS operation failed');
    }

    // Copy file folder to file_copy folder
    fs.cp(origin, destination, { recursive: true }, (err) => {
        if (err) throw err;
    });
};

await copy();
