import { appendFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const create = async () => {
    const filenema = path.resolve('src/fs/files/fresh.txt')
    if (existsSync(filenema)) {
        console.log('cap: file was not created!')
        throw new Error('FS operation failed')
    } else {
        console.log('cap: file was created!')
        await appendFile(filenema, 'I am fresh and young');
    }
};

await create();