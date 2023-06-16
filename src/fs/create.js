import { access, constants, writeFile } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    const fileContent = 'I am fresh and young';

    try {
        // Check if the file already exists
        await access(filePath, constants.F_OK);

        // File already exists, throw an error
        throw new Error('FS operation failed');
    } catch (error) {
        // File doesn't exist, proceed with creating it
        if (error.code === 'ENOENT') {
            await writeFile(filePath, fileContent);

            console.log('Fresh file created successfully!');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await create();