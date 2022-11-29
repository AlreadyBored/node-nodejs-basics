const parseEnv = () => {
    // Write your code here
    const argument = process.argv
    const consol = []
    for (let i = 0; i < argument.length; i++) {
        if(i > 1){
            consol.push(`${argument[i]} is ${argument[i += 1]}`);
        }
    }
    console.log(consol.join(", "));
};

parseEnv();