import * as fs from 'fs';

const remove = async () => {
    const file = 'src/fs/files/fileToRemove.txt';

    fs.unlink(file, (err) => {
        if (err) {
            console.log("FS operation failed", err);
        }
    });
};

await remove();