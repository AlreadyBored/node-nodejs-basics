const parseArgs = () => {
  const args = process.argv.slice(2);
  console.log(
    args
      .filter((item, index) => index % 2 === 0)
      .map((el, i) => `${el.slice(2)} is ${args[2 * i + 1]}`)
      .join(', ')
  );
};

parseArgs();
