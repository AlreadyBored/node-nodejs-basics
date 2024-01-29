const parseEnv = () => {
    const obj = process.env;
    console.log(Object.keys(obj).reduce((acc, curr) => (acc[`RSS_${curr}`] = obj[curr], acc), {}));
};

parseEnv();