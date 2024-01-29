const parseEnv = () => {
    const obj = process.env;
    let str = '';
    for (let prop in obj) {
      if (prop.includes('RSS_')) {
        str += (str.length !== 0) ? `; ${prop}=${obj[prop]}` : `${prop}=${obj[prop]}`;
      }
    }
    console.log(str);
  };
  
  parseEnv();