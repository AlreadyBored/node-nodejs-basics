import { Transform } from 'node:stream';

const transform = async () => {
    const reversingTransformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedContent = chunk
                                        .toString()
                                        .split('')
                                        .reverse()
                                        .join('');
            callback(null, reversedContent);
        }
    });
    try {
        process.stdin
                    .pipe(reversingTransformStream)
                    .pipe(process.stdout);
    } catch(err) {
        console.log(err.message);
    }
};

await transform();