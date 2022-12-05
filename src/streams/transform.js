import { Transform } from 'stream';

const transform = async () => {

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
          this.push(chunk.reverse().toString());
          callback();
        }
    });


    process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();