export const parseArgs = () => {
  const result = [];
  const args = process.argv.splice(2);
  let counter = args.length;
  for (let index = 0; index < counter; index++) {
    result.push(args.splice(0, 2).join(' is ').replace('--', ''));
    counter--;
  }
  console.log(result.join(', '));
};

parseArgs();
