import { open } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const path = `${__dirname}/files/fileToRead.txt`

    const fd = await open(path);

    const readableStream = fd.createReadStream({ encoding: 'utf8' });

    readableStream.on('data', (data) => {
        process.stdout.write(`${data}\n`);
    });
};

await read();
