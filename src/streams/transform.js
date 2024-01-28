import { Transform, pipeline } from 'node:stream';
import { EOL } from 'node:os';

const transform = async () => {
    const reverseStream = new Transform({
        transform(data, encoding, callback) {
            const reversData = data
                .toString()
                .split('')
                .reverse()
                .join('')
                .trim();

            this.push(reversData + EOL)
            callback();
        }
    });

    pipeline(
        process.stdin,
        reverseStream,
        process.stdout,
        err => {
            if (err) throw err;
        });
};

await transform();