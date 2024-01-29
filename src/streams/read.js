import { readFile } from 'node:fs';
import { resolve } from 'node:path';
import { Readable } from 'node:stream';

const read = async () => {
    const filePath = resolve('src', 'streams', 'files', 'fileToRead.txt');

    const stream = Readable({
        read() {
            readFile(filePath, (err, data) => {
                this.push(data);

                this.push(null);
            })
        }
    });

    stream.on('data', function (chunk) {
        process.stdout.write(chunk);
    });
};

await read();