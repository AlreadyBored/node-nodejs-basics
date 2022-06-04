import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const input = process.stdin;
    const output = process.stdout;
    const reverseStr = new Transform({
        transform(data, enc, cb) {
            this.push(`${data.toString().trim().split('').reverse().join('')}\n`);
            cb();
        }
    });
    pipeline(input, reverseStr, output, ()=>{})
};

transform();