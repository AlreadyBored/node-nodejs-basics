import { env } from "node:process";

const parseEnv = () =>
  Object.entries(env)
    .filter(([key]) => key.includes("RSS_"))
    .forEach(([key, value]) => {
      console.log(`${key}=${value}`);
    });

parseEnv();
