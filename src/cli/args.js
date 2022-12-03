const parseArgs = () => {
    let arrArgs = []

    process.argv.slice(2).forEach ( (arg, index, arr) => {
        if (arg.match(/--\S*/ig)) {
            arrArgs.push(arg + ' is ' + arr[index + 1]);
        }
    })

    console.log(arrArgs.join (', '));
};

parseArgs();