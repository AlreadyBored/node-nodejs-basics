const parseEnv = () => {
    // Write your code here
    const argument = process.argv
    for (let i = 0; i < argument.length; i++) {
        if(i > 1){
            console.log(`${argument[i]} is ${argument[i += 1]}`);
        }        
    }
};

parseEnv();