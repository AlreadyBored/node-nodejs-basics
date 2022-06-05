import { Transform } from 'stream';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk) {
            this.push(chunk.toString().split('').reverse().join(''));
            process.exit(200);
        }
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};
transform();