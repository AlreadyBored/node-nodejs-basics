import {log} from "../fs/utils.mjs";

const parseEnv = () => {
  const {env} = process;
  const prefix = 'RSS_';
  const result = Object.entries(env).filter(([key]) => key.startsWith(prefix)).map(([key, value]) => `${key}=${value}`).join('; ');
  log(result);
};

parseEnv();
