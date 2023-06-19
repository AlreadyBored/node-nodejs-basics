const parseArgs = () => {
  const res = [];
  process.argv.forEach((arg, index) => {
    if(arg.startsWith('--')){
      res.push(`${arg.substring(2)} is ${process.argv[index+1]}`)
    }
  });
  console.log(res.join(', '));
};

parseArgs();
