const parseEnv = () => {
  console.log(`SOME=${process.env.SOME}, RSS_foo=${process.env.RSS_foo}, RSS_bar=${process.env.RSS_bar}`);
};

parseEnv();
