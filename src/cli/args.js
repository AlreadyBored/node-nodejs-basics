export const parseArgs = () => {
    const argv = process.argv.slice(2)
    argv.forEach((el, 
        index) => {
        if (el.slice(0, 2).includes('--')) {
            console.log(el + ' is ' + argv[index + 1]);
        }
    });
};

parseArgs()