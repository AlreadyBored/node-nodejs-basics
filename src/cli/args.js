export const parseArgs = () => {
  const args = process.argv.slice(2);
  for(let i = 0; i < args.length / 2; i++) {
    console.log(`${args[i * 2].slice(2)} is ${args[i * 2 + 1]}`);
  }
};

parseArgs();