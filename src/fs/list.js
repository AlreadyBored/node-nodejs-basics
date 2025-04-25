import { access, readdir} from 'node:fs/promises';


const list = async () => {
    const folder = './files';
    try {
        await access(folder)
        const listFiles = await readdir(folder);
        console.log(listFiles);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();