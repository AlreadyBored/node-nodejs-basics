const { fork } = require('child_process');
const { Readable, Writable } = require('stream');

const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const child = fork(__filename, args, { stdio: ['pipe', 'pipe', 'inherit'] });

child.stdout.on('data', (chunk) => {
    process.stdout.write(`Received from child process: ${chunk.toString()}`);
});

process.stdin.on('data', (chunk) => {
    child.stdin.write(chunk);
});

process.stdin.on('end', () => {
    child.stdin.end();
});

if (process.argv.length > 2) {
    const echoInput = (chunk) => {
        const chunkStringified = chunk.toString();
        if (chunkStringified.includes('CLOSE')) process.exit(0);
        process.stdout.write(`Received from master process: ${chunkStringified}\n`);
    };

    process.stdin.on('data', echoInput);
}




