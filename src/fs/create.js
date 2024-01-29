import { fileURLToPath } from 'url';
import { access, writeFile } from 'fs/promises';
import { constants } from 'fs';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checkFileExists = async (filePath) => {
    return await access(filePath, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    if (await checkFileExists(filePath)) {
        throw new Error('FS operation failed.')
    }
    try {
        await writeFile(filePath, 'I am fresh and young', 'utf-8');
        console.log('fresh.txt created successfully.');
    } catch (writeError) {
        console.error(`FS operation failed: ${writeError.message}`);
    }
};

await create();
