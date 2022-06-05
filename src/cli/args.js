export const parseArgs = () => {
    const args = process.argv.slice(2);
    args.forEach((val) => {
        val = val.split('=');
        console.log(`${val[0]} is ${val[1]}`);
    });
};

parseArgs();
