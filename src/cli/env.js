
const parseEnv = () => {
  console.log("RSS Environment Variables:");
  for (const key in process.env) {
    if (key.startsWith("RSS_")) {
      console.log(`${key}: ${process.env[key]}`);
    }
  }
};

parseEnv();
