import { promises } from 'fs';
import { join } from 'path';

const list = async () => {
    const folderPath = join(import.meta.dirname, 'files');

    try {
        await promises.access(folderPath);
        const fileNameList = await promises.readdir(folderPath);

        console.log(fileNameList);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
