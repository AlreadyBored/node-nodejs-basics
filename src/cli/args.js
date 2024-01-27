const parseArgs = () => {
    const argumentsList = process.argv.slice(2);

    const resultList = [];

    for (let i = 0; i < argumentsList.length; i += 2) {
        const propName = argumentsList[i].slice(2);
        const value = argumentsList[i + 1];
        resultList.push(`${propName} is ${value}`)
    }
    const result = resultList.join(', ')
    console.log(JSON.stringify(result));
};

parseArgs();
