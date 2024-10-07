const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
  const chunkStringified = chunk.toString();
  
  // Exit the child process if the input contains 'CLOSE'
  if (chunkStringified.includes('CLOSE')) process.exit(0);

  // Write the received data back to the master process' stdout
  process.stdout.write(`Received from master process: ${chunkStringified}\n`);
};

// Listen to data from the master process via stdin
process.stdin.on('data', echoInput);
