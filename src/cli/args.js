export const parseArgs = () => {
    const args = process.argv;

    args.forEach((value, index) => {
        console.log(`${index} is ${value},`)
    })
};

parseArgs()