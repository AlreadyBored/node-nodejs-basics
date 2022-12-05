import { stdin, stdout } from 'process';

const transform = async () => {
    stdin.setEncoding('utf-8');
    stdout.setEncoding('utf-8');

    process.stdin.on('data', (chunk) => {
        process.stdout.write(Array.from(chunk).reverse().join('').trim() + '\n');
    });
};

await transform();
