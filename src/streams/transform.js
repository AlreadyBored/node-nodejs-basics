import { Transform } from 'stream';

const reverseText = new Transform({
    async transform(chunk) {
        const incomingText = chunk.toString();
        const outgoingText = incomingText.split('').reverse().join('');
        process.stdout.write(outgoingText);
        return Promise.resolve();
      },
    });
    
const transform = async () => {
    process.stdin.pipe(reverseText);
};

await transform();