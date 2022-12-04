const parseArgs = () => {
    const keys = [];
    const values = [];

    process.argv.slice(2).forEach((val, index) => {
        if (index === 0 || index % 2 === 0) {
            keys.push(val.slice(2));
        } else {
            values.push(val);
        }
    });

    const result = keys.map((key, index) => `${key} is ${values[index]}`).join(', ');
    console.log(result);
};

parseArgs();