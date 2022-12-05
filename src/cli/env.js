const parseEnv = () => {
  const arr = Object.entries(process.env);
  for (let item of arr) {
    if (item[0].includes("RSS")) {
      console.log(`${item[0]}=${item[1]}`);
    }
  }
};

parseEnv();
