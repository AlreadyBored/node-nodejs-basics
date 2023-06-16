const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);
console.log("Type anything or Ctrl+C");

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes("CLOSE")) process.exit(0);
    process.stdout.write(
        `Received from master process: ${chunk.toString()}\n Type anything or Ctrl+C \n`
    );
};

process.stdin.on("data", echoInput);
