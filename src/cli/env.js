const parseEnv = () => {
  const result = Object.keys(process.env)
    ?.filter((item) => item.startsWith("RSS_"))
    ?.map((item) => {
      return `${item}=${process.env?.[item]}`;
    })
    .join("; ");

  console.log(result);
};

parseEnv();
