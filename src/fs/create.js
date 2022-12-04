import { writeFile, open } from 'node:fs';
import { resolve } from 'path';

const file = resolve('src', 'fs', 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
    open(file, 'r', (err) => {
        if (!err) {
            throw new Error('FS operation failed');
        } else {
            writeFile(file, content, 'utf8', (error) => {
                if (error) {
                    console.error(error);
                }
            });
        }
    });
};

await create();