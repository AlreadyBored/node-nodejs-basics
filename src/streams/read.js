import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files/fileToRead.txt');

    const stream = createReadStream(filePath, { encoding: 'utf-8' });

    stream.pipe(stdout);

    stream.on('end', () => {
        stdout.write('\nFinished reading file.\n');
    });
};

await read();