import { Transform } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse('').join(''));
        }
    });

    reverse.on('data', (data) => {
        process.stdout.write(data.toString());
    });

    process.stdin.on('data', (data) => {
        reverse.write(data);
    });
};

await transform();
