export const parseArgs = () => {
    const props = [];
    process.argv.forEach((arg, i) => {
        if (arg.includes('--')) {
            props.push(`${arg} is ${process.argv[i + 1]}`);
        } 
    });
    console.log(props.join(', '));
};

parseArgs();