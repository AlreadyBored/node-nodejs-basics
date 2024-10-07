import fsPromises from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


const create = async () => {
    const filePath = path.join(dirname, 'files', 'fresh.txt');

    try {
        await fsPromises.writeFile(filePath, 'I am fresh and young');
    } catch (e) {
        if (e.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw e;
    }
};

await create();
