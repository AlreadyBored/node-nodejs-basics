import { env } from 'process'
const parseEnv = () => {
  for(const i in env) console.log(`RSS_${i}=${env[i]}`)
};

parseEnv();
