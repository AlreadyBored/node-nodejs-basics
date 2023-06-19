const parseArgs = () => {
    const variables = process.argv;
    const defaultStartKey = '--';
    const targetVariables = variables.slice(2);
    const res = [];
    for(let i =0; i<targetVariables.length; i++) {
        res.push(`${targetVariables[i].slice(2)} is ${targetVariables[i+1]}`);
        i++;
    }
    console.log(res.join(', '));
};

parseArgs();