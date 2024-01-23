import process from "node:process";

const envNameStartsWith = "RSS_";

const parseEnv = () => {
  const parsedEnv = Object.fromEntries(
    Object.entries(process.env).filter(([key]) =>
      key.startsWith(envNameStartsWith)
    )
  );

  console.log(parsedEnv);
};

parseEnv();
