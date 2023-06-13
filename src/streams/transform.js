import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const revertData = new Transform({
        transform(data, encoding, callback) {
            callback(null, data.toString().split('').reverse().join(''));
        }
    })

    pipeline(
        process.stdin,
        revertData,
        process.stdout,
        (err) => {
            throw err;
        }
    )

    console.log('Enter smth to console... \n');
};

await transform();