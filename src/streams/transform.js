import { Transform } from 'stream';

const transform = async () => {
    const transform = new Transform({
        transform(text) {
            const inputText = text.toString();
            const reversedText = inputText.split('').reverse().join('');
            this.push(reversedText);
        }
    });
    process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();