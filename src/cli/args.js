const parseArgs = () => {
  const myArgs = process.argv.slice(2);

  const resulst = myArgs.reduce(
    (acc, arg, idx) =>
      acc + (arg.startsWith("--") ? `${arg.slice(2)} is ` : `${arg}${idx < myArgs.length -1 ? ', ' : ''}`),
    ""
  );

  console.log(resulst);
};

parseArgs();
