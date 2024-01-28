import { promises as fs } from 'fs';
import path from 'path';

const create = async () => {
    const content = "I am fresh and young";
    const errorMsg = "FS operation failed";

    const dirPath = path.join('src', 'fs', 'files');
    const filePath = path.join(dirPath, 'fresh.txt');

    try {
        await fs.access(filePath);
        throw new Error("File already exists");
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.writeFile(filePath, content);
        } else {
            throw error;
        }
    }

};

await create();