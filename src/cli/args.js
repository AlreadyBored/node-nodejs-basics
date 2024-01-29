const PREFIX = '--';

const parseArgs = () => {
  const argsParts = process.argv.slice(2).reduce((acc, item, index, array) => {
    if(item.startsWith(PREFIX)) {
      const formattedProp = `${item.replace(PREFIX, '')} is ${array[index + 1]}`;
      return [...acc, formattedProp];
    }
    return acc;
  }, []);

  const stringifiedArgs = argsParts.join(', ');

  console.log(stringifiedArgs);
};

parseArgs();