const parseArgs = () => {
    // Write your code here 
    // const vars = process.argv
    // let properties = [];
    // let values = [];
    // let result = [];
    // for (let key = 0; key < vars.length; key++) {
    //     if (vars[key].includes('--')) {
    //         properties.push(vars[key].slice(2))
    //         values.push(vars[key + 1])
    //     }
    // }

    // for (let i = 0; i < properties.length; i++) {
    //     result.push(`${properties[i]} is ${values[i]} `);
    // }
    // console.log(result.join(", "))
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