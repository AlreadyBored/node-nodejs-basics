import { Transform  } from 'node:stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
    const reversedData = (data) =>  data.toString().split('').reverse().join('');
    const reverseStream = new Transform({
        transform (data, encoding, callback) {
            callback(null, reversedData(data));
        }
    });

    await pipeline(process.stdin, reverseStream, process.stdout);
};

await transform();