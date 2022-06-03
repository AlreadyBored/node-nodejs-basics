export const parseEnv = () => {
  const enviroment = process.env;

  let substrings = [];
  Object.keys(enviroment).forEach((key) => {
    if (key.startsWith("RSS_")) {
      substrings.push(`${key}=${enviroment[key]}`);
    }
  });
  if(substrings.length === 0){
      console.log("No variables start with RSS_ in the environment");
      return;
  };
  const result = substrings.join("; ");
  console.log(result);
};

parseEnv();
