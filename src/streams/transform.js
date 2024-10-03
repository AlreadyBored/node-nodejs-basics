import { Transform } from 'stream';

const transform = async () => {
    let stream = new Transform({
        transform(chunk, encoding, callback) {
            process.stdout.write(chunk.toString().split('').reverse().join(''));
            callback(null);
        },
    })

    process.stdin.resume();

    process.stdin.on('data', (data) => {
        stream.write(data);
        stream.end();
        process.exit();
    })
};

await transform();
