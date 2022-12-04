import { Transform } from 'stream';


const transform = async () => {
    const myTransform = new Transform({
        writableObjectMode: true,
        transform(chunk, encoding, callback) {
            const data = chunk
                .toString(16)
                .split('')
                .reverse()
                .join('');

            callback(null, data);
        }
    });

    myTransform.setEncoding('utf8');
    myTransform.on('data', (chunk) => process.stdout.write(chunk));

    process.stdin.setEncoding('utf8');
    process.stdin.on("data", data => {
        myTransform.write(data);
    });
};

await transform();