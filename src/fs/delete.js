import fs from 'node:fs';
import path from 'path';
const remove = async () => {
    const filePath = path.join(import.meta.dirname, 'files', 'fileToRemove.txt');
    fs.unlink(filePath, (err) => {
        if(err) throw new Error('FS operation failed');
    })
};

await remove();