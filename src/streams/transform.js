import { Transform, pipeline } from 'stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            this.push(reversed);
            callback();
        }
    });

    pipeline(
        process.stdin,
        reverseTransform,
        process.stdout,
        (error) => {
            if (error) {
                console.error(error.message);
            }
        }
    );

    console.log('Please enter text (press Ctrl+C to finish):');
};

await transform();