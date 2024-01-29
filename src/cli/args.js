const parseArgs = () => {
    const result = [];
    const agrsResult = process.argv;
    agrsResult.splice(0,2);
    for (let i = 0; i < agrsResult.length; i += 2) {
        result.push(`${agrsResult[i]} is ${agrsResult[i + 1]}`)
    }
    console.log(result.join(', '))
}

parseArgs();