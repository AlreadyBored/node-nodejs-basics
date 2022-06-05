import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const rs = process.stdin;
    const ws = process.stdout;
    const ts = new Transform({
        transform(chunk, enc, cb) {
            const reversed = chunk.toString()
                .trim()
                .split('')
                .reverse()
                .join('');

            cb(null, reversed);
            this.end();
        }
    });

    pipeline(rs, ts, ws, (err) => console.log(err));
};

transform();