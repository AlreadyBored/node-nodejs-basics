import fs from 'node:fs';
import path from 'path';
const remove = async () => {
    const filePath = path.join('fs', 'files', 'fileToRemove.txt');
    fs.unlink(filePath, (err) => {
        if(err) throw new Error('FS operation failed');
    })
};

await remove();