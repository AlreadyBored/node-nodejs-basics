const parseArgs = () => {
  const { argv } = process;
  const argL = argv.length;
  for (let i = 2; i < argL - 1; i += 2) {
    const key = argv[i].slice(2, argv[i].length);
    console.log(`${key} is ${argv[i + 1]}`);
  }
};
parseArgs();
