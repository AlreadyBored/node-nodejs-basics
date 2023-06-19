import { env } from "node:process";

const parseEnv = () => {
  const newArr = [];
  for (let i of Object.keys(env)) {
    if (i.startsWith("RSS_")) {
      newArr.push(`${i}=${env[i]}`);
    }
  }
  console.log(newArr.join("; "));
};

parseEnv();
