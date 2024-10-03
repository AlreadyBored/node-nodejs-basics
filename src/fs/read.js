import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFile } from 'node:fs/promises';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const directory = join(__dirname, 'files');
    const fileName = 'fileToRead.txt';
    const filePath = join(directory, fileName);

    try {
        const content = await readFile(filePath, { encoding: 'utf-8' });

        console.log(content);
    } catch(error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }

        throw error;
    }
};

await read();