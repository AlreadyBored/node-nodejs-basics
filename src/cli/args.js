const parseArgs = () => {
  try {
    const args = process.argv.slice(2);
    const params = args.reduce((acc, curr, currIndex, array) => {
      if (curr.startsWith('--') && array[currIndex + 1] && !array[currIndex + 1].startsWith('--')) {
        acc[curr.slice(2)] = array[currIndex + 1];
      }
      return acc;
    }, {})

    console.log(Object.entries(params).map(([name, value]) => `${name} is ${value}`).join(', '));
  } catch (error) {
    throw error;
  }
};

parseArgs();
