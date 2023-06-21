import process from 'node:process';
import { Transform, pipeline } from 'node:stream';


const transform = async () => {

    const reverseTransform = new Transform ({
             
        transform(chunk, encoding, callback) {
            const reversedData = chunk.toString().split('').reverse().join('');
            this.push(reversedData);
            callback();
        }
    });

    pipeline(
        process.stdin,
        reverseTransform,
        process.stdout, 
        (err) => console.error(err.message));

};

await transform();