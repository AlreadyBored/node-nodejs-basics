import {copyFile, mkdir, readdir} from 'node:fs/promises'
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const copy = async () => {
    try {
        await mkdir(`${__dirname}/files_copy`);
        const arrayOfFilesInDir = await readdir(`${__dirname}/files`).then(data => data);
        await arrayOfFilesInDir.forEach(item => {
            copyFile(`${__dirname}/files/${item}`, `${__dirname}/files_copy/${item}`)
        })
        console.log('Files copied');
    }
    catch {
        throw new Error('FS operation failed');
    }
};

copy();