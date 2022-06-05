import { argv } from "node:process";

export const parseEnv = () => {
  return argv.map((elem, index) => {
    return index > 1 ? `RSS_name${index-1}=${elem};` : "";
  }).join(" ");
};

console.log(parseEnv())