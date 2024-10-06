const parseArgs = () => {
  const args = process.argv.slice(2);

  args.forEach((arg, idx, argList) => {
    if (!(idx % 2)) console.log(`${arg} is ${argList[idx + 1]}`);
  });
};

parseArgs();
