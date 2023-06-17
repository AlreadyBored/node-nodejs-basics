import { Transform } from "stream";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout, stdin } from 'process';

const transform = () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('') + '\n';
            this.push(reversedChunk);
            callback();
        }
    });

    stdout.write('Введите строку. Для выхода Ctrl + C.\n');
    stdin.pipe(reverseTransform).pipe(stdout);
};

transform();
