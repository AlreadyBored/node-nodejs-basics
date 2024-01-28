import { Transform,pipeline } from 'node:stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback){
            const reversedData = chunk.toString().split('').reverse().join('');
            this.push(reversedData);
            callback();
        }
    });

    pipeline(process.stdin, transformStream, process.stdout, (err) => {
        if (err) {
            console.error(err);
        }
    });

};

await transform();