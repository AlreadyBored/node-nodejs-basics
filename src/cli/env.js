import { env } from "node:process";

const parseEnv = () => {
  for (let key in env) {
    if (key.indexOf("RSS_") == 0) console.log(`${key}=${env[key]}`);
  }
};

parseEnv();
