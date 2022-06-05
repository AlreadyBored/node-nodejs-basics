export const parseEnv = () => {
  let result = '';
  for (let [key, value] of Object.entries(process.env)) {
    if (/RSS_[a-zA-Z]*/g.test(key)) {
      result += `${key} = ${value}; `;
    }
  }
  console.log(result.slice(0, -2));
};
