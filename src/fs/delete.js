import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    let filename = 'fileToRemove.txt';
    const filePath = path.join(__dirname, 'files', filename);

    try {
        await fs.access(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }

    await fs.unlink(filePath);
    console.log(`File ${filename} has been deleted successfully.`);

};

await remove();