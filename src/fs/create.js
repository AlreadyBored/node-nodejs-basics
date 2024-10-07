import fs from 'fs/promises';
import path from 'path';
import url from 'url';



const create = async () => {
    // Write your code here
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fresh.txt');;
    const dataToWrite = 'I am fresh and young';

    try {
        await fs.access(file);

        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(file, dataToWrite);
        } else {
            throw error;
        }
    }
};

await create();