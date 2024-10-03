import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createWriteStream } from 'node:fs';
import { stdin, stdout } from 'node:process';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files/fileToWrite.txt');

    const stream = createWriteStream(filePath, { encoding: 'utf-8' });

    stdin.pipe(stream);

    stdout.write('Please write something\n');
};

await write();