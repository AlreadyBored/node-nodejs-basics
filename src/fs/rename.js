import fs from 'fs';
const rename = async () => {
    // Write your code here 
    const oldName = 'wrongFilename.txt';
    const newName = 'properFilename.md';
    // Check if the file exists and the destination file does not exist
    if (fs.existsSync(oldName) && !fs.existsSync(newName)) {
        // Rename the file from the old name to the new name
        fs.rename(oldName, newName, (err) => {
            // If there is an error, throw an error
            if (err) {
                throw new Error('FS operation failed');
            }
            console.log('File renamed successfully');
        });
    // If the file does not exist, throw an error
    } else {
        throw new Error('FS operation failed');
    }
}
await rename();