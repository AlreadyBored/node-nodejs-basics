import {Transform} from 'stream';

export const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _, callback) {
            callback(null, String(chunk).split('').reverse().join(''));
        }
    });
    
    process.stdin
        .pipe(transformStream)
        .pipe(process.stdout);
};