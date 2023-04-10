const parseEnv = () => {
    // Write your code here 
    //console.log(process.env);
    for (const [key, value] of Object.entries(process.env)) {
        if (key.startsWith('RSS_')) {
          console.log(`${key}=${value}`);
        }
      }
};

parseEnv();