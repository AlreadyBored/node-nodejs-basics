import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const path = `${__dirname}/files/fileToWrite.txt`
    const fd = await open(path, 'w');
    const writeStream = fd.createWriteStream({ encoding: 'utf-8' });

    process.stdin.on('data', (data) => {
        writeStream.write(data);
    });
};

await write();
