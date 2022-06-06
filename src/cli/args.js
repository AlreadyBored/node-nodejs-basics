
export const parseArgs = () => {
  if (process.argv.length === 2) {
    console.error('Expected argument(-s)!');
    process.exit(1);
  }
  
  const args = process.argv.slice(2).map((el) => el = el.replace('--',''));
  console.log(`${args[0]} is ${args[1]}, ${args[2]} is ${args[3]}`);

};

parseArgs()
