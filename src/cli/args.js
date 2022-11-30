const getArgs = (args) =>
    args.slice(2).reduce((acc, value, index, array) => {
        if (value.slice(0, 2) !== "--") {
            return acc;
        }

        return { ...acc, [value.slice(2)]: array[index + 1] };
    }, {});

const parseArgs = () => {
    const args = Object.entries(getArgs(process.argv))
        .map(([key, value]) => `${key} is ${value}`)
        .join(", ");

    console.log(args);
};

parseArgs();
