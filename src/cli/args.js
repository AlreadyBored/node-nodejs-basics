export const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = []

  for (let i = 0; i < args.length; i+=2) {
    result.push(`${args[i].slice(2)} is ${args[i+1]}`)
  }
  return result.join(', ');
};

// test
console.clear()
console.log(parseArgs())