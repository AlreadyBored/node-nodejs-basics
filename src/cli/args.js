export const parseArgs = () => {
    const result = process.argv.slice(2);
    result.reduce((acum, arg) => {
        let [key, value] = arg.split('=');
        console.log(`${key} is ${value}`);
    }, []);
};
parseArgs();