import { appendFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
const create = async () => {
    if (existsSync('src/fs/files/fresh.txt')) {
        throw new Error ('FS operation failed')
    }
    let content = 'I am fresh and young'
    await appendFile('src/fs/files/fresh.txt', content)
};

await create();