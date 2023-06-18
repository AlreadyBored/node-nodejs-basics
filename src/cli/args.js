const parseArgs = () => {
    // Write your code here 
    const myArgs = process.argv.slice(2);
    let result = ''
    myArgs.forEach((element, i) => {
      result += i % 2 !== 0 ? `${element}${(myArgs.length -1)!==i ? ',' : ''} ` : `${element.slice(2)} is ` 
    });
    console.log(result)
};

parseArgs();