import fs from "fs";

const parseEnv = () => {
  // Write your code here
  const envVariables = Object.entries(process.env);

  const rssVariables = envVariables.filter(([key]) => key.startsWith("RSS_"));

  const formattedVariables = rssVariables.map(
    ([key, value]) => `${key}=${value}`
  );

  if (rssVariables.length === 0) {
    throw new Error(
      "FS operation failed: No environment variables with prefix RSS_ found."
    );
  }

  console.log(formattedVariables);
};

parseEnv();
