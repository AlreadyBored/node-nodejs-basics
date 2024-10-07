import { Transform } from 'stream';
const transform = async () => {
    const reverseStd = new Transform({
        transform(chunk, encoding, callback) {
            callback(null,  String(chunk).split('').reverse().join(''));
        }
    });
    process.stdin.pipe(reverseStd).pipe(process.stdout);
};

await transform();
