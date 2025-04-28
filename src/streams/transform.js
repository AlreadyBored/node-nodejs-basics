import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'process';
const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            this.push(reversed);
            callback();
        }
    });

    pipeline(
        stdin,
        reverseStream,
        stdout,
        (err) => {
            if (err) {
                console.error(err);
            }
        }
    );

    console.log('Please enter some text to write to file. Press Ctrl+D to finish.');
};

await transform();