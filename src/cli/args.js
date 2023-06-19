const parseArgs = () => {
    // Write your code here
    console.log(process.argv)
    const args = process.argv.slice(2)
    let result = ''
    args.forEach((element, i) => {
      result += i % 2 !== 0 ? `${element}${(args.length -1)!==i ? ',' : ''} ` : `${element.slice(2)} is `
      console.log(result)
    });
    console.log(result)
}

parseArgs();