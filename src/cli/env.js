import process from 'process';
const parseEnv = () => {
  const data = process.env;
  Object.entries(data).forEach((item) => {
    if (item[0].slice(0, 4) === 'RSS_') console.log(item[0], '=', item[1]);
  });
};

parseEnv();
