const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);

  const dict = {};

  args.forEach((el, index, arr) => {
    if (el.startsWith("--")) {
      const propName = el.split("").slice(2).join("");

      dict[propName] = arr[index + 1];
    }
  });

  let ans = [];

  for (let prop in dict) {
    ans.push(`${prop} value is ${dict[prop]}`);
  }

  console.log(ans.join(", "));
};

parseArgs();
