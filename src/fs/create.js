import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';

async function create() {
    const path = 'src/fs/files/fresh.txt';

    const exists = await fileExists(path);

    if (exists) {
        throw new Error('FS operation failed');
    }

    try {
        await writeFile(path, 'I am fresh and young');
    } catch (err) {
        throw new Error('FS operation failed');
    }
}

await create();

async function fileExists(filePath) {
    try {
        await access(filePath, constants.F_OK);
        return true;
    } catch {
        return false;
    }
}
