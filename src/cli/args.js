const args = process.argv;

const parseArgs = () => {
  let result = "";
  for (let index = 2; index < args.length; index += 2) {
    const firstTwoChar = args[index].slice(0, 2);
    if (firstTwoChar === "--") {
      const propName = args[index].slice(2);
      const value = args[index + 1];
      result += `${propName} is ${value}; `;
    }
  }
  console.log(result.slice(0, -2));
};

parseArgs();
