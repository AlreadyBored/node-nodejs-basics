import { existsSync, unlinkSync } from 'node:fs';

const remove = async (filePath) => {
    const fileExists = existsSync(filePath);

    if(!fileExists) throw new Error('FS operation failed')

    try {
        unlinkSync(filePath);
    } catch (err) {
        throw new Error(err.message)
    }};

await remove('files/fileToRemove.txt');