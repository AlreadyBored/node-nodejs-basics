const parseEnv = () => {
    const prefix = 'RSS_';

    const obj = Object
        .entries(process.env)
        .filter(el => el[ 0 ].includes(prefix));

    const formatData = obj.map(el => `${el[ 0 ]}=${el[ 1 ]}`);

    console.log(formatData.join('; '));
};

parseEnv();