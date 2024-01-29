import { Transform, pipeline } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _, callback) {
            callback(null, chunk.reverse());
        },
    });

    pipeline(process.stdin, reverse, process.stdout, (error) => {
        if (error) process.stderr.write(error);
    });
};

await transform();
