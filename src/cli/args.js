const parseArgs = () => {
    const argv = process.argv.slice(2);

    const result = argv.reduce((acc, value, index, array) => {
        if (value.startsWith('--', 0)) {
            acc += `${value.replace('--', '')} is ${array[index + 1]} `
        }

        return acc
    }, '')

    console.log(result)
};

parseArgs();
