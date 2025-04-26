import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import { stdin, stdout } from 'process';

const reverseTransform = new Transform({
    transform(chunk, _, callback) {
        const reversed = chunk.toString().trim().split('').reverse().join('') + '\n';
        callback(null, reversed);
    },
});

const transform = async () => {
    process.stdin.pipe(reverseTransform).pipe(process.stdout);

    try {
        await pipeline(stdin, reverseTransform, stdout, { end: false });
    } catch (err) {
        console.log('error');
    }
};

await transform();
