import { existsSync } from 'node:fs';
import { unlink } from 'node:fs/promises';
import path from 'node:path';

const remove = async () => {
    const file = path.join(process.cwd(), 'src/fs/files/fileToRemove.txt');

    if (!existsSync(file)) {
        throw new Error('FS operation failed');
    }

    try {
        await unlink(file);
    } catch (error) {
        console.error('there was an error:', error.message);
    }
};

await remove();
