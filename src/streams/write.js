import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { stdin } from 'node:process';

export const write = async () => {
    const filePath = await fileURLToPath(new URL('./files/fileToWrite.txt', import.meta.url));
    const readableStream = stdin;
    const writableStream = await createWriteStream(filePath, 'utf-8');

    readableStream.on('data', function(chunk) {
        writableStream.write(chunk);
    });
};

write();
