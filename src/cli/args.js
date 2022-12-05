const parseArgs = () => {
  const arrOfArg = process.argv;
  for (let i = 0; i < arrOfArg.length; i++) {
    if (arrOfArg[i].includes("--")) {
      console.log(`${arrOfArg[i].slice(2)} is ${arrOfArg[i + 1]}`);
    }
  }
};

parseArgs();
