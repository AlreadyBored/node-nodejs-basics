const parseArgs = () => {
    const [_nodeExecPath, _execFilePath, ...args] = process.argv;

    let propsWithValues = [];
    for (let i = 0; i < args.length; i += 2) {
        propsWithValues.push(`${args[i].slice(2)} is ${args[i + 1]}`);
    }
    if (propsWithValues.length) console.log(propsWithValues.join(", "));
};

parseArgs();
