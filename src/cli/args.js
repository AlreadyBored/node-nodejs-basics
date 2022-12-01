const parseArgs = () => {
    // Write your code here
    const argument = process.argv.splice(2);
  const consol = [];
  for (let i = 0; i < argument.length; i++) {
    consol.push(`${argument[i]} is ${argument[(i += 1)]}`);
  }
  console.log(consol.join(", "));
};

parseArgs();