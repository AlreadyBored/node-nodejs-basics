import { Transform } from 'stream';
import { EOL } from 'os';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedValue = chunk.toString().replace(EOL, '').split('').reverse().join('');
            callback(null, `${reversedValue}\n`);
        }
    });

    process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
