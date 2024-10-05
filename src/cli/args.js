const parseArgs = () => {
    console.log(process.argv.slice(2).map(value => value.includes('--') ? value.replace('--', '') + ' is ' : value + ', ').join('').slice(0, -2))
};

parseArgs();