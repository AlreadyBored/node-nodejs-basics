import { env } from "process";
export const parseEnv = () => {
  try {
    const envMassive = Object.entries(env);
    const onlyRssMassive = envMassive.filter(([key]) => key.includes("RSS_"));
    console.log(onlyRssMassive);
  } catch (error) {
    if (error) {
      console.error(error);
    }
  }
};
parseEnv();
