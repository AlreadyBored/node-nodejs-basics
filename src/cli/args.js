const parseArgs = () => {
    // Write your code here

    const data = process.argv
        .reduce((acc, item, i, arr) =>
            item.startsWith('--') ? [ ...acc, `${item.slice(2)} is ${arr[i + 1]}`] : acc, []
        ).join(', ');

    console.log(data);
};

parseArgs();