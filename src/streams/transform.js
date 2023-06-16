import { stdin, stdout } from 'node:process';
import { Transform } from 'stream';


const reverseText = new Transform({
    transform: (chunk, encoding, callback) => {
        const text = chunk.toString();
        const reversedText = text.split('').reverse().join('');

        callback(null, reversedText);
    }
});

const transform = async () => {
    stdin.pipe(reverseText).pipe(stdout)
};

await transform();
