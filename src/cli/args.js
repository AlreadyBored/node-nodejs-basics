const parseArgs = () => {
    const args = process.argv.slice(2).reduce((acc, item, index) => {
        if (index === 0) return `${acc}${item}`;
        else if (index % 2 === 0) return `${acc}, ${item}`;
        else return `${acc} ${item}`;
    }, '');

    console.log(args);
};

parseArgs();