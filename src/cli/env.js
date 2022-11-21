const parseEnv = () => {
  for (let [key, value] of Object.entries(process.env)) {
    if (key.startsWith("RSS_")) {
      console.log(value);
    }
  }
};
// RSS_FOO=111 RSS_BAR='BAR' node env.js to set up env variables
parseEnv();
