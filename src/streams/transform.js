import { Transform } from 'stream';
const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        callback(
            null,
            chunk.toString().split('').reverse().join('').trim() + '\r\n'
        );
        process.exit();
    },
});

export const transform = async() => {
    console.log('Enter data');
    process.stdin.pipe(transformStream).pipe(process.stdout);
};
transform();