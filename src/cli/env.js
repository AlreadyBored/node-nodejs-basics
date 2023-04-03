const parseEnv = () => {
  // Write your code here
  const variables = process.env;
    for(let key in variables){
        let keyVar = key
        keyVar = "RSS__" + keyVar
        process.stdout.write(keyVar + `=${variables[key]}; \n`);
    }
};

parseEnv();
