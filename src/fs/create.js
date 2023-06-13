import { existsSync } from 'node:fs';
import { appendFile } from 'node:fs/promises'

const create = async () => {
    // Write your code here
    const __basicsDir = new URL(".", import.meta.url).pathname;
    const path = `${__basicsDir}files/fresh.txt`;
    try {
        if (existsSync(path)) throw Error('FS operation failed');
        await appendFile(path, 'I am fresh and young', { encoding: 'utf8' });
    } catch (e) {
        console.error(e);
    }
};

await create();