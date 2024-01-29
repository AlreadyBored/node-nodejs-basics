const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    const keys = [];
    const values = [];
    const resArr = [];

    args.map((item) => {
        if (item.startsWith('--')) {
            keys.push(item)
        } else {
            values.push(item)
        }
    })
    keys.forEach((key, index) => {
        resArr.push(`${key.replace('--', '')} is ${values[index]}`);
    })
    console.log(resArr.join(', '));
};

parseArgs();