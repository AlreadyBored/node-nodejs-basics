import fs from 'fs';

const rename = async () => {
    fs.access('fs/files/properFilename.md', (error) => {
        if (error) {
            fs.rename('fs/files/wrongFilename.txt', 'fs/files/properFilename.md', () => {
                console.log("\nFile Renamed!\n")
            })
        } else {
            throw new Error("FS operation failed")
        }
    });
};

await rename();