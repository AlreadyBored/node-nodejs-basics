const parseArgs = () => {
    const argArr = process.argv.slice(2)
    
    for (let i = 0; i < (argArr.length / 2); i++) {
        console.log(`prop${i+1} ${argArr[i*2].replace('--', '')} is ${argArr[i*2+1]}`)
    }
};

parseArgs();