import { fileURLToPath  } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);

const write = async () => {
    const PATH = join(dirname(__filename), 'files/fileToWrite.txt');
    const stream = createWriteStream(PATH, { encoding: 'utf8' });

    process.stdin.pipe(stream);
};

await write();