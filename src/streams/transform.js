import { Transform } from 'stream';

const transform = async () => {

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().split('').reverse().join('');
            this.push(reversed);
            callback();
        }
    });

    reverseTransform.pipe(process.stdout);

    process.stdin.on('data', (data) => {
        reverseTransform.write(data);
    });
};

console.log('Введите текст. Нажмите Enter:');
await transform();
