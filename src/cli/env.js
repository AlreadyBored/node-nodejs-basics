const parseEnv = () => {
    const keys = Object.entries(process.env).filter(([key]) => key.match(/RSS_/));
    const res = keys.map((e) => e.join('=')).join('; ');
    console.log(res);
};

parseEnv();