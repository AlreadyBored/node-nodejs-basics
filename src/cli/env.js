import process from 'process';

export const parseEnv = () => {
    const res = Object.entries(process.env).map(variable => `RSS_${variable[0]}=${variable[1]}`);
    console.log(res)
};

// parseEnv()