export const parseEnv = () => {
  const array = Object.keys(process.env);
  const PREFIX = 'RSS_';
  const REG_EXP = new RegExp('^' + PREFIX);
  const sortedArray = array.filter((el) => el.search(REG_EXP) !== -1);
  if (sortedArray.length === 0) {
    console.log(`No env-variables with prefix: ${PREFIX}`);
    return;
  }
  for (let value of sortedArray) {
    console.warn(value + '=' + process.env[value]);
  }
};

parseEnv();