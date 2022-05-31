// Для проверки
process.env.RSS_name1 = "value1";
process.env.RSS_name2 = "value2";

export const parseEnv = () => {
  const result = [];
  Object.entries(process.env).forEach(([key, value]) => {
    if (/^RSS_*/.test(key)) {
      const item = `${key}=${value}`;
      result.push(item);
    }
  });
  console.log(result.join("; "));
};
parseEnv();
