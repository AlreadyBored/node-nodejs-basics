const parseArgs = () => {
  const args = process.argv.slice(2); // Հեռացնում ենք առաջին երկու էլեմենտները
  const result = {};

  args.forEach((arg) => {
    const [key, value] = arg.split("="); // բաժանել '--name=John' → ['--name', 'John']
    const cleanKey = key.replace(/^--/, ""); // հանել '--' մասը
    result[cleanKey] = value || true; // եթե արժեք չկա, դնել true
  });

  console.log(result);
  return result;
};

parseArgs();
