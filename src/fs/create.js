import { access, writeFile } from 'node:fs/promises';
import path from 'path';
import { constants } from 'node:fs';

export const create = async () => {
    const dirname = path.resolve();
    const filePath =  path.join(dirname, 'files', 'fresh.txt');

    try {
        await access(filePath, constants.R_OK);
    }catch {
        try {
            await writeFile(filePath, 'I am fresh and young');
        }catch (e) {
            console.error(e);
        }
    }
};