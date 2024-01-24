const parseEnv = () => {
    // Write your code here 
    const envObject = Object.entries(process.env);
    const filteredEnv = envObject.filter(([key, value]) => key.startsWith('RSS_'));
    let result = '';
    filteredEnv.forEach(([key, value]) => {
      result += result.length ? `; ${key}=${value}` : `${key}=${value}`;
    })
    console.log(result);
};

parseEnv();