const parseArgs = () => {
    const rawArgs = process.argv.slice(2);
    const parsedArgs = JSON.parse(JSON.stringify(rawArgs));

    let arg = null;
    const args = parsedArgs.reduce( (acc, val) => {
        if (val.startsWith("--")) {
            arg = { 
                name: val.slice(2), 
                value: null 
            };
            acc.push(arg);   
        } else {
            arg.value = val;
        }
        return acc;
    }, []);

    args.forEach( arg => console.log(`${arg.name} is ${arg.value}`) );
};

parseArgs();