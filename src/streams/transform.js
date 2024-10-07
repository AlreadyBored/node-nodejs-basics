/*
* implement function that reads data from process.stdin,
* reverses text using Transform Stream and then writes it into process.stdout
*/
import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join('') + '\n');
            callback();

            process.stdout.end(() => {
                process.exit();
            });
        }
    });
    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();