const { env } = process;

export const parseEnv = () => {
  // Write your code here
  const list = Object.keys(env);
  const result = list.reduce((acc, item) => {
    if (item.includes("RSS_")) {
      return `${acc} ${item}=${env[item]};`;
    }
    return acc;
  }, "");
  console.log(result);
};

export default (() => {
  parseEnv();
})();
