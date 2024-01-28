const parseArgs = () => {
  const args = process.argv.slice(2);
  let result = "";
  if (args.length > 1) {
    result += `${args[0].slice(2)} is ${args[1]}`;
    for (let i=2; i< args.length; i+=2) {
      result += `, ${args[i].slice(2)} is ${args[i+1]}`;
    }
  }

  console.log(result);

};

parseArgs();