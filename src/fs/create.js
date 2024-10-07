import { access, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const checkIsFileExist = (code) => {
    return code !== 'ENOENT'; // how i understand this code says file not exist
}

const create = async () => {
    const filePath = join(__dirname, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (checkIsFileExist(error.code)) {
            throw error;
        }
        await writeFile(filePath, content);
        console.log('File created successfully!');
    }
};

await create();