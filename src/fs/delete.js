import { access, unlink } from 'fs/promises';
import path from "path";

const remove = async () => {
    const filePath = path.join(process.cwd(), 'src/fs/files/fileToRemove.txt');

    try {
        await access(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    await unlink(filePath);
};

await remove();