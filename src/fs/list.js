import { access, readdir } from 'fs/promises';
import path from "path";

const list = async () => {
    const folderPath = path.join(process.cwd(), 'src/fs/files');

    try {
        await access(folderPath);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    const files = await readdir(folderPath);

    files.forEach((file) => {
        console.log(file);
    })
};

await list();