const parseArgs = () => {
    let res = []
    res = process.argv.filter(arg => arg.slice(0,2) === "--")
    res = res.map(val => val = `${val.slice(2)} is ${process.argv[process.argv.indexOf(val) + 1]}`)

    console.log(res.join(", "))
};

parseArgs();