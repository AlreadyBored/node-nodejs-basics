let rss = "RSS_";

const parseEnv = () => {
  console.log(
    Object.entries(process.env)
      .filter((item) => {
        return item[0].match(rss)
      }).map((elem) => `${elem[0]}=${elem[1]}; `).join('')

  )


};

parseEnv();