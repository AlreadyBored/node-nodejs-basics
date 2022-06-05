export const parseArgs = () => {
  let result = '';

  for (
    let i = 0, j = 1;
    i < process.argv.length, j < process.argv.length;
    i++, j++
  ) {
    if (process.argv[i].substring(0, 2) === '--') {
      const propName = process.argv[i].split('--')[1];
      result += `${propName} is ${process.argv[j]}, `;
    }
  }

  console.log(result);
};

parseArgs();
