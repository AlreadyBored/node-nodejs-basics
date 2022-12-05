const parseArgs = () => {
  const [, , ...args] = process.argv;
  console.log(
    args
      .map((arg, i) =>
        arg.startsWith("--") ? `${arg.slice(2)} is ${args[i + 1]}` : ""
      )
      .filter((arg) => arg)
      .join(", ")
  );
};

parseArgs();
