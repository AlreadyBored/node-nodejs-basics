const parseArgs = () => {
  let ans = '';
  for (let i = 2; i < process.argv.length; ++i) {
    const arg = process.argv[i];
    if (arg.startsWith('--')) {
      ans += arg.slice(2);
    } else {
      ans += ` is ${arg}${i < process.argv.length - 1 ? ', ' : ''}`;
    }
  }
  console.log(ans);
};

parseArgs();
