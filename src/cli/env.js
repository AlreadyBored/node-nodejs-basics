import { env } from 'node:process';
const parseEnv = () => {
    // Write your code here
  try {
    let variables = '';
    for (let key in env) {
      if (key.match(/^RSS_/g)) variables = `${variables}${key}=${env[key]}; `;
    }
    console.log(variables);
  } catch (e) {
    console.error(e);
  }
};

parseEnv();