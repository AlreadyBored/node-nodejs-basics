const parseArgs = () => {
    // Write your code here 
    const vars = process.argv
    let properties = [];
    let values = [];
    let result = [];
    for (let key = 0; key < vars.length; key++) {
        if (vars[key].includes('--')) {
            properties.push(vars[key].slice(2))
            values.push(vars[key + 1])
        }
    }

    for (let i = 0; i < properties.length; i++) {
        result.push(`${properties[i]} is ${values[i]} `);
    }
    console.log(result.join(", "))
};

parseArgs();