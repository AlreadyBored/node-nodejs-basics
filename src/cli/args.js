const parseArgs = () => {
  const args = process.argv.slice(2);

  let i = 0;
  const result = args.map((v, i) => `prop${i+1}Name is ${v}`);

  console.log(result.join(', ').replace('1', ''));

};

parseArgs();
