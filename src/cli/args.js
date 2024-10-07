function parseArgs() {
  const args = process.argv.slice(2);
  const output = [];

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace("--", "");
    const value = args[i + 1];
    output.push(`${propName} is ${value}`);
  }

  console.log(output.join(", "));
}

parseArgs();
