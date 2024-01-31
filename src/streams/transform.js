import { Transform } from 'stream';

const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
        const reversedText = chunk.toString().split('').reverse().join('');
        this.push(reversedText);
        callback();
    }
});

const transform = () => {
    return new Promise((resolve, reject) => {
        process.stdin.pipe(reverseTransform).pipe(process.stdout);

        process.stdin.on('end', () => {
            resolve();
        });

        process.stdin.on('error', (error) => {
            reject(error);
        });
    });
};

// Use transform function
const runTransform = async () => {
    try {
        await transform();
    } catch (error) {
        console.error(`Error during transformation: ${error.message}`);
    }
};

// Run the transformation
runTransform();
