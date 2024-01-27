const parseEnv = () => {
  const envArray = Object.entries(process.env).filter((el) =>
    el[0].includes("RSS_")
  );
  envArray.forEach((el) => {
    const [key, value] = el;
    console.log(`RSS_${key}=${value};`);
  });
};

parseEnv();
