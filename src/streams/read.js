import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);

const read = async () => {
    const PATH = join(dirname(__filename), 'files/fileToRead.txt');
    const stream = createReadStream(PATH, { encoding: 'utf8' });

    stream.pipe(process.stdout);
    stream.on('end', () => {
        process.stdout.write('\n');
    });
};

await read();