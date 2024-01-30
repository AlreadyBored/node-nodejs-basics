import { Writable } from 'node:stream';
import { resolve } from 'node:path';
import { writeFile } from 'node:fs';

const write = async () => {
    const filePath = resolve('src', 'streams', 'files', 'fileToWrite.txt');

    const stream = Writable({
        write(chunk, encoding, callback) {

            writeFile(filePath, chunk, (err) => {
                if (err) throw err;

                callback();
            });
        },
    });

    process.stdin.pipe(stream);
};

await write();