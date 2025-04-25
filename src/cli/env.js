import { env } from "node:process";

const parseEnv = () => {
  const rssEnv = Object.entries(env)
    .reduce((acc, [key, value]) => {
      if (key.startsWith("RSS_")) {
        acc.push(`${key}=${value}`);
      }

      return acc;
    }, [])
    .join("; ");

  console.log(rssEnv);
};

parseEnv();

