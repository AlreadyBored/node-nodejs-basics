const parseArgs = () => {
    const inputArgs = process.argv.slice(2);

    const formattedArgs = inputArgs.reduce((argsAcc, arg, index, array) => {
        const isKey = arg.startsWith("--");
        const value = array[index + 1];
        return isKey && value !== undefined ? [...argsAcc, `${arg.slice(2)} is ${value}`] : argsAcc;
    }, [])

    console.log(formattedArgs.join(", "))
};

parseArgs();
