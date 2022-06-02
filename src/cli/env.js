import { env } from "process";

export const parseEnv = () => {
  try {
    const envMassive = Object.entries(env);
    const onlyRssMassive = envMassive.filter(([key]) => key.includes("RSS_"));
    onlyRssMassive.map((val, key) => {
      console.log(`RSS_Name${[+key + 1]}=${val[1]}`);
    });
  } catch (error) {
    if (error) {
      console.error(error);
    }
  }
};
parseEnv();
