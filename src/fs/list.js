import { readdir } from 'fs/promises';

const list = async () => {
    const sourceFolder = 'src/fs/files';
    try {
     const files = await readdir(sourceFolder);
     console.log(files)
    } catch(error) {
        console.error('FS operation failed')
    }

};

await list();