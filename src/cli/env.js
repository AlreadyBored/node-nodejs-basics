const parseEnv = () => {
    const regexp = /^RSS_/;

    const arrayWithEnvs = Object.entries(process.env);
    const arr = [];

    arrayWithEnvs.forEach(item => {
        const currentEnv = item[0].match(regexp);
        if (currentEnv?.length) {
            arr.push(`${currentEnv.input}=${item[1]}`);
        }
    });

    const result = arr.join('; ');

    console.log(result);
};

parseEnv();