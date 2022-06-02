import { promises } from 'fs';
import * as url from 'url';
import path from 'path';

const checkIfExists = async (file) => {
    try {
        await promises.stat(file);
        return true;
    } catch (error) {
        return false;
    }
}

export const create = async () => {
    const dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const filename = path.resolve(dirname, 'files/fresh.txt');
    try {
        const hasFile = await checkIfExists(filename);
        if (hasFile) {
            throw new Error('FS operation failed');
        }
        await promises.writeFile(filename, 'I am fresh and young');
    } catch (error) {
        console.error(error);
    }
};

await create();
