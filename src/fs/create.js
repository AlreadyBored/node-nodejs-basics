import { writeFile, readFile } from 'fs/promises';

const create = async (fileName, conent) => {
    const file = `src/fs/files/${fileName}`
    try {
        await readFile(file);
        console.error('FS operation failed')
    }  catch (error) {
        await writeFile(file, conent);
    }


};

await create('fresh.txt', 'I am fresh and young');