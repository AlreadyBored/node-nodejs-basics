const parseEnv = () => {
  const rssVariables = Object.entries(process.env).filter(([key, _]) =>
    key.startsWith("RSS_"),
  );

  const formattedString = rssVariables
    .map(([key, value]) => key + "=" + value)
    .join("; ");

  console.log(formattedString);
};

parseEnv();
