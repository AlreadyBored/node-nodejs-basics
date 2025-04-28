import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {promises as fs} from 'fs';

const rename = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = join(__dirname, 'files', 'properFilename.md');
    try {
        await fs.access(oldPath);
        await fs.access(newPath)
            .then(() => {
                throw new Error();  // it catches in the catch section
            })
            .catch(err => {
                if (err.code !== 'ENOENT') throw err;
            });

        await fs.rename(oldPath, newPath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();