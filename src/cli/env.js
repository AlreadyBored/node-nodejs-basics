import process from 'process';

const parseEnv = () => {
    const arr = Array.from(Object.entries(process.env));
    const newArr = arr.filter((elem) => elem[0].startsWith('RSS_')).map((elem) => `${elem[0]}=${elem[1]}`);
    console.log(newArr.join('; '));
};

parseEnv();
