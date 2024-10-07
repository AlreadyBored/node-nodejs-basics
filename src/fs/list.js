import { opendir } from 'node:fs/promises';

const list = async () => {
    try {
        const dir = await opendir('./src/fs/filesw');
        for await (const dirent of dir)
            console.log(dirent.name);
    
    } catch (err) {
        throw new Error("FS operation failed");
    }
};

await list();