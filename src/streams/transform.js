import { stdout, stdin } from 'node:process';

const transform = async () => {
    const stream = stdin;
    stream.setEncoding('utf-8');
    stream.pipe(stdout);
};

await transform();