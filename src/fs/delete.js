import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToDelete = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    if (!fs.existsSync(fileToDelete)) {
        throw new Error('FS operation failed');
    }

    fs.unlink(fileToDelete, err => {
        if (err) throw err;

        console.log('*** File deleted successfully! ***');
    })

};

await remove();