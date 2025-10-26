const parseArgs = () => {
  let result = [];

  process.argv.forEach((arg, index, arr) => {
    if(arg.includes('--')){
      result.push(`${arg} is ${arr[++index]}`)
    }
  })
  console.log(result.join(', '))
};

parseArgs();
