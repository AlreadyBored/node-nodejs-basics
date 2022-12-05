const parseArgs = () => {
  const filtered = process.argv.filter((item, index) => item.startsWith('--') || process.argv[index-1]?.startsWith('--'));
  const res = [];
  for (let i = 0; i < filtered.length; i+=2) {
    res.push(`${filtered[i]} is ${filtered[+i+1]}`);
  }
  console.log(res.join(', '));
};

parseArgs();