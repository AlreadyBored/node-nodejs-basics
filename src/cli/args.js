export const parseArgs = () => {
  const args = process.argv.slice(2);
  const props = [];
  const values = [];

  args.forEach((arg, index) => {
    if (index % 2 === 0) {
      props.push(arg);
    } else {
      values.push(arg);
    }
  });

  props.forEach((prop, index) => {
    console.log(`${prop} is ${values[index]}`);
  });
};
