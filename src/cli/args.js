//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#command-line-interfacesrccli

const parseArgs = () => {
  const cliArgs = process.argv.slice(2);
  let result = "";

  cliArgs.forEach((it, index) => {
    result += index % 2 === 0 ? `${it} is ` : `${it}, `;
  });
  result = result.trim();
  result.endsWith(",") ? console.log(result.slice(0, -1)) : console.log(result);
};

parseArgs();
