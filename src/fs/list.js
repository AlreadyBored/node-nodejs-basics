import { access, constants, readdir, unlink } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesFolder = path.join(__dirname, 'files')

const list = async () => {
    try {
        access(filesFolder)
        const files = await readdir(filesFolder)
        console.log(files);
    } catch (error) {

        throw new Error('FS operation failed')
    }
};

await list();