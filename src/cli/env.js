import process from "process";

export const parseEnv = () => {
  // Write your code here

  process.env.RSS_name1 = "value1";
  process.env.RSS_name2 = "value2";
  process.env.RSS_name3 = "value3";

  for (const [key, value] of Object.entries(process.env)) {
    if (key.includes("RSS_")) {
      console.log(`${key}: ${value};`);
    }
  }
};

parseEnv();
