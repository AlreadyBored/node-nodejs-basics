export const parseArgs = () => {
  // Write your code here
  let result = "";
  process.argv.forEach((item, index, array) => {
    if (item.match(/^(?:--).+/g)) {
      result += `${item} is ${array[index + 1]}; `;
    }
  });
  console.log(result.slice(0, result.length - 2));
};

parseArgs();
