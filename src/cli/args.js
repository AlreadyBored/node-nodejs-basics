const parseArgs = () => {
    const [,,...rest] = process.argv;
    const res = [];
    for (let i = 1; i < rest.length; i+=2) {
        res.push(`${rest[i-1]} is ${rest[i]}`);
    }
    console.log(res.join(', '));
};

parseArgs();