import { Transform } from 'stream';

export const transform = async () => {
    class ReverseStream extends Transform {
        constructor() {
            super();
        }

        _transform(chunk, encoding, callback) {
            this.push(/./g[Symbol.match](chunk).reverse().join(''));
            callback();
        }
    }

    const reverseStream = new ReverseStream();

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};