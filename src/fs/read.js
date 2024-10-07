import fs from 'fs';

const read = async () => {
    // Write your code here 
    // Set the file path
    const filePath = new URL('files/fileToRead.txt', import.meta.url);

    // Validate if the file exists
    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    // Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
};

await read();