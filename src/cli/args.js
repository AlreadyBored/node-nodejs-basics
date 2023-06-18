const parseArgs = () => {
  const message =  process.argv.reduce((acc, argName,i) => {
        if (i % 2 === 0) {
            acc = acc + `${argName} is ${process.argv[i + 1]}, `
            return acc
        }
       return  acc
    }, '')
    console.log(message)
};

parseArgs();
