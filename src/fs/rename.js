import { existsSync as exists } from 'fs';
import fsAsync from 'fs/promises'

const oldPath = `${import.meta.dirname}/files/wrongFilename.txt`;
const newPath = `${import.meta.dirname}/files/properFilename.md`;

const rename = async () => {
    if (!exists(oldPath) || exists(newPath)) {
        throw Error('FS operation failed');
    }

    await fsAsync.rename(oldPath, newPath)
};

await rename();