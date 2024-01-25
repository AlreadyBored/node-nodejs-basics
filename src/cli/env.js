const parseEnv = () => {
    
    const variables = process.env;
    const prefix = 'RSS_';
    //const prefix = 'Prog';
    // if you dont see any vars with 'RSS_' prefix, change this prefix to 'Prog' (for example) to see, that code is working

    for (const prop in variables) {
        if (prop.slice(0, 4) === prefix) {
            console.log(prop + ' = ' + variables[prop]);
        }
    }

};

parseEnv();