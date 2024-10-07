import fs from 'fs';

 // Set the file path
 const filePath = new URL('files/wrongFilename.txt', import.meta.url);
 const newFilePath = new URL('files/properFilename.md', import.meta.url);

const rename = async () => {
    // Write your code here 
    // Validate if the wrong file exists and the new file does not exist
    if (!fs.existsSync(filePath) || fs.existsSync(newFilePath)) {
        throw new Error('FS operation failed');
    }

    // Rename the file
    fs.rename(filePath, newFilePath, (err) => {
        if (err) throw err;
    });
};

await rename();