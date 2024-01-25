const parseEnv = () => {
  const rssVariables = Object.entries(process.env)
    .filter(([key, value]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  if (rssVariables) {
    console.log(`RSS Environment Variables: ${rssVariables}`);
  } else {
    console.log("No RSS Environment Variables found.");
  }
};

parseEnv();

// example

// RSS_NAME1=value1 RSS_NAME2=value2 node env.js
