import { Transform } from 'node:stream';

const transform = async () => {
    const myTransform = new Transform({
        writableObjectMode: true,
    
        transform(chunk, encoding, callback) {
         const data = Buffer.from(chunk).toString().split('').reverse().join('');
         callback(null, data);
        },
    }); 

    myTransform.setEncoding('utf8');

    process.stdin.write("Write some text and press ENTER" + '\n');
    process.stdin.on('data', (chunk) => {myTransform.write(chunk)});

    myTransform.on('data', (chunk) => {
        process.stdin.write('Transformed result');
        process.stdout.write(chunk + '\n')
    });
};

await transform();