const parseArgs = () => {
  let args = '';
  const argv = process.argv;

  for (let i = 2; i < argv.length; i++) {
    args += `${args ? ', ' : ''}${argv[i]} is ${argv[i + 1]}`;
    i++;
  }
  console.log(args);
};

parseArgs();
