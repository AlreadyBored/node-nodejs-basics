import { Transform } from 'stream';

const transform = async () => {
    const reverseStream = new Transform({
        transform(chunk, encoding, callback) {
            // Reverse the chunk of text
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();

// THIS IS A COUSE FROM RS APP

// PPA SR MORF ESUOC A SI SIHT