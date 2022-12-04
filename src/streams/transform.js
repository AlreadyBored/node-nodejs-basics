import { Transform } from 'node:stream'

const transform = async () => {
    process.stdin.on('data', chunk => {
        const data = chunk.toString().split('').reverse().join('');
        process.stdout.write(data);
    });  
};

await transform();