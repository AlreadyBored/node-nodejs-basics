const parseEnv = () => {
    const myEnv = process.env;
    const keysEnv = Object.keys(process.env);
    const valuesEvn =  Object.values(process.env);
    const sliceEvn = keysEnv.forEach((el, index) => {
        if (el.slice(0, 3) === 'RSS') {
            console.log(keysEnv[index], '=', valuesEvn[index])
        }
    });
};

parseEnv();