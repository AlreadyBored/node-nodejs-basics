export const parseArgs = () => {
  const resultVarObj = process.argv.slice(2).reduce((acc, it, idx, arr) => {
    if (it.startsWith('--')) {
      const key = it.slice(2);
      console.log(`${key} is ${arr[idx + 1]}`);
      return { ...acc, [key]: arr[idx + 1] };
    }
    return acc;
  }, {});
  // console.log(resultVarObj);
};

parseArgs();
