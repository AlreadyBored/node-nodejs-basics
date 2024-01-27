const parseEnv = () => {
  const map = new Map(Object.entries(process.env));
  map.forEach((value, key) => console.log(`RSS_${key}=${value}`));
};

parseEnv();

//env.js - implement function that parses environment variables
// with prefix RSS_ and prints them to the console in the format
// RSS_name1=value1; RSS_name2=value2
