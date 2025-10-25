const parseArgs = () => {
  const argsArr = process.argv.slice(2)
  const parsedArgs = argsArr.reduce((acc, item, index) => {
    if(item.startsWith('--')) {
      return [...acc, `${item.slice(2)} is ${argsArr[index + 1]}`]
    }
    return acc;
  }, []).join(', ')
  console.log(parsedArgs)
};

parseArgs();
