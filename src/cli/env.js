const variables = process.env;

const parseEnv = () => {
  const result = Object.keys(variables)
    .filter((item) => item.includes("RSS_"))
    .reduce((acc, cur) => {
      return acc + `${cur}=${variables[cur]}; `;
    }, "")
    .slice(0, -2);
  console.log(result);
};

parseEnv();
