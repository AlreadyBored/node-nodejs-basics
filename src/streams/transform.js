import { dir } from 'console';
import fs from 'fs';
import path, { dirname } from 'path';
import { stdin, stdout } from 'process';
import { Transform } from 'stream';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createReverse = () => {
    return new Transform({
        transform(chunk, enc, cb) {
            const reverse = chunk.toString().split('').reverse().join('');
            cb(null, reverse);
        }
    })
}

const transform = async () => {
    const reverse = createReverse();
    stdin.pipe(reverse).pipe(stdout);
};



await transform();