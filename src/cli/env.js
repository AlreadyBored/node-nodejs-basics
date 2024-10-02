import dotenv from "dotenv";
dotenv.config();
const parseEnv = () => {
  const envVars = [];
  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("RSS_")) {
      envVars.push(`${key}=${value}`);
    }
  }
  console.log(envVars.join(", "));
};

parseEnv();
