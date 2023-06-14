import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const writeStream = createWriteStream(path.resolve(__dirname, 'files', 'fileToWrite.txt'), { flags: 'a' });
    process.stdout.write('Введите текст:\n');
    await pipeline(process.stdin, writeStream);
};

await write();