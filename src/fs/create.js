import { writeFile, access, constants } from 'node:fs/promises';

const create = async () => {
    const filePath = new URL('./files/fresh.txt', import.meta.url);
    
    try {
        await access(filePath, constants.F_OK);
        console.error("FS operation failed");
    } catch(_error) {
        const data = 'I am fresh and young';
        writeFile(filePath, data);
    }
};

await create();