import { Transform, pipeline, } from 'stream';

process.stdin.resume();

export const transform = async () => {
    // transform.js - implement function that reads data from process.stdin,
    // reverses text using Transform Stream and then writes it into process.stdout
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.reverse());
        },
    });

    pipeline(
        process.stdin,
        transform,
        process.stdout,
        (err) => {
            if (err) {
              console.error('Pipeline failed.', err);
            } else {
              console.log('Pipeline succeeded.');
            }
          }
    );
};

transform();