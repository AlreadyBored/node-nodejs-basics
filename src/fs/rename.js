import { existsSync } from 'node:fs';
import { rename as asyncRename } from 'node:fs/promises';
import path from 'node:path';

const rename = async () => {
    const srcFile = path.join(process.cwd(), 'src/fs/files/wrongFilename.txt');
    const destFile = path.join(process.cwd(), 'src/fs/files/properFilename.md');

    if (existsSync(destFile) || !existsSync(srcFile)) {
        throw new Error('FS operation failed');
    }

    try {
        await asyncRename(srcFile, destFile);
    } catch (err) {
        console.error(err);
    }
};

await rename();
