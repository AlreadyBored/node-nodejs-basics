export const parseArgs = () => {

    for (let i = 2; i < process.argv.length; i++) {
        console.log(process.argv[i].substr(2) + ' is ' + process.argv[i + 1]);
        i++;
    }
};
parseArgs();