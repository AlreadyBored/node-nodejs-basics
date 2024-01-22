const parseArgs = () => {
  const args = process.argv.slice(2).join(" ").split("--");

  const list = [];
  for (const arg of args) {
    const [key, value] = arg.split(" ");
    if (!value) continue;

    list.push(`${key} is ${value}`);
  }

  console.log(list.join(", "));
};

parseArgs();
