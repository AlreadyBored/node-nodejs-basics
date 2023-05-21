import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedStr = chunk.toString()
                .trim()
                .split('')
                .reverse()
                .join('');

            callback(null, `${reversedStr}\n`);
        }
    });

    try {
        await pipeline(
            process.stdin,
            transformStream,
            process.stdout
        );
    } catch (error) {
        console.log('Stream error occurred');
    }
};

await transform();