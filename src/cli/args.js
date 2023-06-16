const parseArgs = () => {
    const argv = process.argv.slice(2);
    
    argv.forEach((item, index) => {console.log(`${item} is ${argv[index+1] || ''}`)})

};

parseArgs();