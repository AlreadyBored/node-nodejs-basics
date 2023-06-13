import fs from 'fs/promises';
import path from 'path';
import url from 'url'

const read = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToRead.txt');
    let output;
    try {
        output = await fs.readFile(file, 'utf8');
    } catch (err) {
        throw new Error('FS operation failed');
    }
    console.log(output);
};

await read();