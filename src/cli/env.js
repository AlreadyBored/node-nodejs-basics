import process from "process";

const parseEnv = () => {
  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      console.log(key);
    }
  }
};

parseEnv();
