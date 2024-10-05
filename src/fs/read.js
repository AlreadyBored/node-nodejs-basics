import { access, readFile } from 'fs/promises';
import path from "path";

const read = async () => {
    const filePath = path.join(process.cwd(), 'src/fs/files/fileToRead.txt');

    try {
        await access(filePath)
    } catch (error) {
        throw new Error('FS operation failed');
    }

    const content = await readFile(filePath, 'utf8');
    console.log(content);
};

await read();