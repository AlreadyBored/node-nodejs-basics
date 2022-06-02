import stream from 'node:stream';
import process from 'node:process';

export const transform = async () => {
    const reverseStream = class extends stream.Transform {
        constructor(options) {
            super(options);
        }

        _transform(data, encoding, callback) {
            callback(null, data.toString().split('').reverse().join(''));
        }
    }

    process.stdin
        .pipe(new reverseStream())
        .pipe(process.stdout);
};

transform();