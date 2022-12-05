import {rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const remove = async () => {
    const _dirname = path.dirname(fileURLToPath(import.meta.url));
    try {
        await rm(_dirname + '/files/fileToRemove.txt');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
