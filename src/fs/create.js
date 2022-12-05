import { writeFile }   from 'node:fs/promises';
import { existsSync } from 'node:fs'
const create = async () => {
    try {
        const filePath = new URL('files/fresh.txt', import.meta.url);
        if (existsSync) {
            throw new Error('FS operation failed');
        }
        await writeFile(filePath, 'I am fresh and young');
    } catch(error) {
        console.log(error.message)
    }
};

await create();