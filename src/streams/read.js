import { open } from 'fs/promises';
import path from 'path';
const __dirname = path.dirname(process.argv[1]);

export const read = async () => {
    try {
        const fd = await open(path.join(__dirname, '/files/fileToRead.txt'));
        const stream = fd.createReadStream()
        stream.pipe(process.stdout)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

// read()