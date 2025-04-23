const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  const prefix = '--';
  const values = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith(prefix)) {
      values.push(`${args[i].slice(prefix.length)} is ${args[i + 1]}`);
      i += 1;
    }
  }
  if (values.length > 0) {
    console.log(values.join(', '));
  }
};

parseArgs();
