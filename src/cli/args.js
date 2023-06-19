const parseArgs = () => {
  const result = process.argv
    .reduce((acc, item, index, arr) => {
      if (item.startsWith('--')) {
        let newItem = `${item.slice(2)} is ${arr[index + 1]}`;
        acc.push(newItem);
      }

      return acc;
    }, [])
    .join(', ');

  console.log(result);
};

parseArgs();
