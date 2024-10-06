import fs from "fs/promises";
import path from "path";

const read = async () => {
    const fileToReadPath = path.join(import.meta.dirname, 'files', 'fileToRead.txt');
    try {
        await fs.access(fileToReadPath);
        const content = await fs.readFile(fileToReadPath,'utf8');
        console.log(content)
    }catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }else {
            throw err
        }
    }
};

await read();
