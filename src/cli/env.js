import { env } from "node:process";

export const parseEnv = () => {
  for (let item in env) {
    if (item.toString().startsWith("RSS_")) {
      console.log(`${item}=${env[item]}`);
    }
  }
};
parseEnv();
// RSS_name1=value1 RSS_name=value2 node cli/env.js
