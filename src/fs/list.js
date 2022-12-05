import {readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const list = async () => {
    const _dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        const files = await readdir(_dirname + '/files');
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
