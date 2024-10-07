import { Transform } from 'stream';

const transform = async () => {
    // Write your code here 
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = chunk.toString().split('').reverse().join('');
            this.push(reversedText); 
            callback(); 
        }
    });

    await new Promise((resolve, reject) => {
        process.stdin
            .pipe(reverseTransform) 
            .pipe(process.stdout)   
            .on('finish', resolve) 
            .on('error', reject);   
    });
};

await transform();