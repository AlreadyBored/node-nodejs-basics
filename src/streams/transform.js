import { Transform } from 'stream';


const reverseTranform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().split('').reverse().join(''));
        callback();
    }
});

const transform = async () => {
    process.stdin.pipe(reverseTranform).pipe(process.stdout);
};

await transform();