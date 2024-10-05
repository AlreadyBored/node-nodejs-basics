import { access, writeFile } from 'fs/promises';
import path from "path";

const create = async () => {
    const filePath = path.join(process.cwd(), 'src/fs/files', 'fresh.txt');

    try {
        await access(filePath);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }

    await writeFile(filePath, 'I am fresh and young', 'utf8');
};

await create();