const parseArgs = () => {
    // Write your code here 
    let result = ''
    for (let i = 0; i < process.argv.length; i++) {
        if (process.argv[i].includes('--')) {
            let propName = process.argv[i].replace('--', '')
            result += `${propName} is ${process.argv[i + 1]}${i === (process.argv.length - 2) ? '' : ', '}`
        }
    }
    console.log(result);
};

parseArgs();