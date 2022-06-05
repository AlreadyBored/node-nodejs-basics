export const parseArgs = () => {
  let args = process.argv.slice(2).reduce((prev, cur, index) => {
    if (index % 2) return prev + cur + ', ';
    else return prev + cur + ' is ';
  }, '');
  console.log(args.slice(0, -2));
};
