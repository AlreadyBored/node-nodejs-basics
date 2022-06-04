import { Transform } from 'stream';

export const transform = async () => {
    const transformStream = new Transform();

    transformStream._transform = (chunk, encoding, callback) => {

        const reverseChunk = chunk.toString().trim().split('').reverse().join('');
        transformStream.push(reverseChunk);
    }

    process.stdin.pipe(transformStream).pipe(process.stdout);
};
transform();
