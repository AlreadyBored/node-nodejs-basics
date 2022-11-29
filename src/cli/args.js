const parseArgs = () => {
    // Write your code here
    const variables = process.env;
    for(let key in variables){
        let keyVar = key
        keyVar = "RSS__" + keyVar
        console.log(keyVar + `=${variables[key]}`);
    }
};

parseArgs();