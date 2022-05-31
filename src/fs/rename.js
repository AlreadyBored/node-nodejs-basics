import {rename} from 'node:fs/promises';
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const renameFile = async () => {
    try {
        await rename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`);
    }
    catch {
        throw new Error('FS operation failed');
    }
};

renameFile()