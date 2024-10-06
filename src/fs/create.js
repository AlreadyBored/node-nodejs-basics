import fs from 'fs/promises';
import path from 'path';
import { FsOperationFailed } from './errors.js';

const create = async () => {
    const filePath = path.resolve('src', 'fs', 'files', 'fresh.txt');
    let isExist = false;
    console.log('filePath: ', filePath)

    try {
        isExist = await fs.stat(filePath);
    } catch (error) {
        console.log(error)
    }

    if (isExist) {
        throw new FsOperationFailed();
    }

    const content = 'I am fresh and young';
    try {
        await fs.writeFile(filePath, content);
    } catch (error) {
        console.log(error);
    }
};

await create();