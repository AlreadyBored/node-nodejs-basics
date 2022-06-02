export const parseEnv = () => {
  // Write your code here
  const { env } = process;
  console.log(`RSS_name1=${env.RSS_name1};`, `RSS_name2=${env.RSS_name2};`);
};
// run: RSS_name1=value1 RSS_name2=value2  node env.js
