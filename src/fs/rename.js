import { rename as fsRename } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const OLD_NAME = './src/fs/files/wrongFilename.txt';
const NEW_NAME = './src/fs/files/properFilename.md';

const rename = async () => {
    try {
        if (existsSync(NEW_NAME)) throw new Error(`File ${NEW_NAME} already exists`);
        await fsRename(OLD_NAME, NEW_NAME);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();