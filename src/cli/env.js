const parseEnv = () => {
  let ans = '';
  Object.entries(process.env).map(([key, value]) => {
    if (key.startsWith('RSS_')) {
      ans += `${key}=${value}; `;
    }
  });
  console.log(ans.slice(0, ans.length - 2));
};

parseEnv();
