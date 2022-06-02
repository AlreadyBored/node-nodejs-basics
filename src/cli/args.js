export const parseArgs = () => {
  // Write your code here
  console.log(
    process.argv
      .filter((_, i) => ![0, 1].includes(i))
      .map((a) => `${a.replace("--", "").split("=")[0]} is ${a.split("=")[1]}`)
      .join(", ")
  );
  // run: node args.js --propName=value --prop2name=value2
};
