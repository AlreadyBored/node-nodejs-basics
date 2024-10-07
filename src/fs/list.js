import fs from 'fs';

const list = async () => {
    // Write your code here
    // Set the path
    const path = new URL('files/', import.meta.url);

    // Validate if the path exists
    if (!fs.existsSync(path)) {
        throw new Error('FS operation failed');
    }

    // List the files
    fs.readdir(path, (err, files) => {
        if (err) throw err;
        console.log(files);
    });
};

await list();