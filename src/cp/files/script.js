const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
  const chunkStringified = chunk.toString();
  if (chunkStringified.includes('CLOSE')) {
    process.send('CLOSE');
    process.exit(0);
  }
  process.stdout.write(`Received from master process: ${chunk.toString()}\n`);
  process.send('Msg from child process');
};

process.on('message', echoInput);
