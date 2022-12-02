import { readdir } from 'node:fs/promises';

const list = async () => {
    const filesDirPath = new URL('./files', import.meta.url);
    
    try {
        const files = await readdir(filesDirPath);

        for(const file of files) {
            console.log(file);
        }
    } catch(_error) {
        console.error('FS operation failed');
    }
};

await list();