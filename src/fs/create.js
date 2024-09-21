import { promises as fs } from 'fs';
import path from 'path';

import { getDirPath } from '../utils/getDirPath.js';
import { checkFileExists } from '../utils/checkFileExists.js';


export async function createFreshFile() {
    try {
        const dirPath = getDirPath(import.meta.url)
        const filePath = path.join(dirPath, 'files', 'fresh.txt')
        const isExists = await checkFileExists(filePath);

        if (isExists) {
            throw Error('FS operation failed');
        }

        const content = 'I am fresh and young';
        await fs.writeFile(filePath, content, 'utf-8')
    } catch (err) {
        throw err
    }
}

createFreshFile()
    .then(() => {
        console.log('File created successfully!');
    })
    .catch((error) => {
        console.error(error.message);
    });