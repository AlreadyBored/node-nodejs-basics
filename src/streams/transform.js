import { pipeline, Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const reverseText = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, chunk.reverse());
        },
    });

    pipeline(
        stdin,
        reverseText,
        stdout,
        (err) => {
            if (err) {
                console.error('Failed to reverse.', err);
            }
        }
    );
};

await transform();