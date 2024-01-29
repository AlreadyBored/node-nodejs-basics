import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { Readable } from 'node:stream';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
    const filePath = resolve('src', 'hash', 'files', 'fileToCalculateHashFor.txt');

    class ReadableStream extends Readable {
        constructor(data, options) {
            super(options);

            this.data = data;
        }

        _read(size) {
            for(let i = 0; i < this.data.length; i += size) {
                this.push(this.data.slice(i, i + size));
            }

            this.push(null);
        }
    }

    const buffer = await readFile(filePath);

    const stream = new ReadableStream(buffer, { highWaterMark: 5 });

    const hash = createHash('sha256');

    stream.on('data', function(chunk) {
        hash.update(chunk);
    })

    stream.on('end', () => {
        const hex = hash.digest('hex');

        console.log(hex);
    })
};

await calculateHash();
