import fs from 'fs';
import url from 'url';
import path from 'path';
import stream from 'stream';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const transform = async () => {
    try {
        const rs = process.stdin;
        const ws = process.stdout;
        const transform = new stream.Transform({
            transform(chunk, _, cb) {
                const newChunk = `${chunk.toString().trim().split('').reverse().join('')}\n`;
                this.push(newChunk);
                cb();
            }
        })
        await stream.promises.pipeline(
            rs,
            transform,
            ws
        )
    } catch (error) {
        console.log(error);
    }
};

transform()