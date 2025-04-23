import { Transform } from 'stream';

const transform = async () => {
    const reversedSteam = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            callback(null, reversed + '\n');
        }
    });

    console.log('Enter text to flip (press Ctrl+D or Enter to complete input):');

    process.stdin.pipe(reversedSteam).pipe(process.stdout);
};

await transform();