import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

export const read = async () => {
    const filePath = await fileURLToPath(new URL('./files/fileToRead.txt', import.meta.url));
    const stream = await createReadStream(filePath, 'utf-8');

    stream.on('data', (chunk) => stdout.write(chunk));

    setTimeout(() => {
        stream.close();
    }, 100);
};

read();
