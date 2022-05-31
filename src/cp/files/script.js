const arguments = process.argv.slice(2);

console.log(`Total number of arguments is ${arguments.length}`);
console.log(`Arguments: ${JSON.stringify(arguments)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
};

process.stdin.on('data', echoInput);