import * as fs from 'fs';

const rename = async () => {
    const oldPath = 'src/fs/files/wrongFilename.txt';
    const newPath = 'src/fs/files/properFilename.md';

    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.log("FS operation failed", err);
        }
    });
};

await rename();