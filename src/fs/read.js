import { existsSync } from 'node:fs';
import { open } from 'node:fs/promises';
import path from 'node:path';

const read = async () => {
    const fileName = path.join(process.cwd(), 'src/fs/files/fileToRead.txt');

    if (!existsSync(fileName)) {
        throw new Error('FS operation failed');
    }

    try {
        const file = await open(fileName);
        for await (const line of file.readLines()) {
            console.log(line);
        }
    } catch (err) {
        console.error(err);
    }
};

await read();
