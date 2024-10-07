import { pipeline as streamPipeline } from 'stream/promises';
import { Transform } from 'stream';

function stringReverse(chunk) {
    return chunk.toString().split('').reverse().join('')+"\n";
}

const transform = async () => {

    const streamTransformingProcess = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, stringReverse(chunk));
        }
    });

    await streamPipeline(process.stdin, streamTransformingProcess, process.stdout);

}

await transform();
