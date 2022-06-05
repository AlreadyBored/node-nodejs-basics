export const parseArgs = () => {
  let output = '';
  const startIndex = process.argv.findIndex((arg) => arg.includes('--'));
  const argumentsArr = process.argv.slice(startIndex);
  for (let index = 0; index < argumentsArr.length; index++) {
    const argument = argumentsArr[index];
    if (argument.includes('--')) {
      output += `${argument.replace('--', '')} is `;
    } else {
      output += `${argument} `;
    }
  }
  console.log(output);
};

parseArgs();
