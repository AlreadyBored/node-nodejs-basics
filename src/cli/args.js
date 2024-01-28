const parseArgs = () => {
    const processArr = process.argv.slice(2);
    const result =[];

    for (let i =0; i < processArr.length; i++){
        if (processArr[i].includes('--')) {
            result.push(`${processArr[i]} is ${processArr[i+1]}`)

        }
    }
    console.log(result.join(', '))
};

parseArgs();