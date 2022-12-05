const parseArgs = () => {
  const res = process.argv
    .filter(str => str[0] !== '/')
    .map(str => str.startsWith('--')? str.slice(2) + ' is' : str + ',').join(' ')
    .slice(0,-1)
  console.log(res)
};

parseArgs();