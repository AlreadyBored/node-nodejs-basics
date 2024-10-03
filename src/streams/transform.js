import { Transform } from 'stream';
import { pipeline} from 'stream/promises';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(text, _, callback) {
            const reversedText = text.toString().split('').reverse().join('');
            callback(null,`${reversedText}\n`);
        }
    });
    await pipeline(process.stdin, reverseTransform, process.stdout);
};

await transform();