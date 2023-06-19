import { argv } from 'node:process';

const parseEnv = () => {
  const variables = process.env;
  const defaultStartKey = 'RSS_';
  const res = Object.entries(variables).filter(key => key[0].startsWith(defaultStartKey))
  const resAfterJoin = res.map(key =>key.join('='));
  console.log(resAfterJoin.join('; '));
};

parseEnv();