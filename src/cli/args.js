import process from 'node:process';

const parseArgs = () => {
    process.argv.forEach((item, index) => {
        if (item.includes('--')) {
            console.log(item.replace('--', '') + ' is ' + process.argv[index + 1])
        }
    })
};

parseArgs();