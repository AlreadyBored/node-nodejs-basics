const parseEnv = () => {
    const rss = []
    const vars  = process.env
    for (let key in vars) {
      if (key.slice(0, 4) === 'RSS_') {
        rss.unshift(`${key}=${vars[key]}`)
      }
    }
    console.log(rss.join('; '))
};

parseEnv();