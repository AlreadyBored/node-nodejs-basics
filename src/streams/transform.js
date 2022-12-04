import {Transform} from 'stream';

const transform = async () => {
    try {
        const createRevertStringTransformStream = () => {
            return new Transform({
                transform(chunk) {
                    return chunk.toString().split('').reverse().join('');
                }
            })
        }

        const transformStream = createRevertStringTransformStream();
        process.stdin.pipe(transformStream).pipe(process.stdout)
    } catch (error) {}
};

await transform();