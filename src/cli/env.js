const parseEnv = () => {
  const obj = process.env; // creating obj variable and assign process.env to it
  //   itereate obj
  for (let key in obj) {
    console.log(`RSS_${key}=${obj[key]}`); // log to the console each key-value pair
  }
};

parseEnv();
