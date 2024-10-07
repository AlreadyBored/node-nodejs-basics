import  fs  from 'node:fs/promises';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const currentPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(currentPath);
        await fs.access(newPath).then(() => {
            console.error('FS operation failed')
            throw new Error('FS operation failed');
        }).catch(async (err) => {
            if (err.code === 'ENOENT') {
                await fs.rename(currentPath, newPath);
            } else {
                throw err;
            }
        })

    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await rename();
