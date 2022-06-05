export const parseEnv = () => {
  process.env["RSS_"] = 100;
  process.env["RSS_variable"] = 42342;

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("RSS")) console.log(`${key} = ${value}`);
  }
};

parseEnv();
