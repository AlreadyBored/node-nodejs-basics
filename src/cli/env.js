import process from "node:process";

const parseEnv = () => {
  const keys = Object.keys(process.env).filter((key) => key.startsWith("RSS_"));
  keys.forEach((key) => {
    console.log(`${key}=${process.env[key]}`);
  })
};

parseEnv();
