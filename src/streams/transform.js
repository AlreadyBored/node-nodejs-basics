import { Transform } from "stream";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout, stdin } from 'process';

class ReverseTransform extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('') + '\n';
        this.push(reversedChunk);
        callback();
    }
}

const transform = () => {
    const reverseTransform = new ReverseTransform();

    stdout.write('Введите строку. Для выхода Ctrl + C.\n');
    stdin.pipe(reverseTransform).pipe(stdout);
};

transform();
