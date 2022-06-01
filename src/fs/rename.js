import {existsSync} from 'fs';
import {rename as renameFs} from 'fs/promises';
import {fileURLToPath} from 'url';
import {join} from 'path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const rename = async () => {
    const pathWrongFile = join(__dirname, 'files', 'wrongFilename.txt');
    const pathProperFile = join(__dirname, 'files', 'properFilename.md');

    if (
        !existsSync(pathWrongFile) ||
        existsSync(pathProperFile)
    ) {
        throw new Error('FS operation failed');
    }

    try {
        await renameFs(pathWrongFile, pathProperFile);
    } catch(err) {
        throw err;
    }
};