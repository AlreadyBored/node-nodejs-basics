const parseArgs = () => {
  const argKeys = process.argv.filter((el) => el.startsWith("--"));
  const argValues = process.argv.slice(2).filter((el) => !el.startsWith("--"));

  const result = argKeys
    .map((el, index) => `${el.replace("--", "")} is ${argValues[index]}`)
    .join(", ");

  console.log(result);
};

parseArgs();
