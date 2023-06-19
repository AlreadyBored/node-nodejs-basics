const parseArgs = () => {
  const argv = process.argv.slice(2);
  let result = '';
  for (let i = 0; i < argv.length; i += 2) {
    result += `${argv[i].slice(2)} is ${argv[i + 1]}, `;
  }
  console.log(result.slice(0, -2));
};

parseArgs();
