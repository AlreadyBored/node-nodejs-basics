import { argv } from "node:process";

export const parseArgs = () => {
  let substr = "";
  return argv
    .slice(2)
    .map((elem) => elem.replace("--", ""))
    .reduce((acc, elem, index, arr) => {
      if ((index + 1) % 2 === 0) {
        substr += elem;
        acc += substr + (index + 1 === arr.length ? "" : ", ");
        substr = "";
      } else {
        substr = `${elem} is `;
      }
      return acc
    }, "");
};

console.log(parseArgs());
