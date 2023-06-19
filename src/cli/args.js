const parseArgs = () => {
    const argv = process.argv.slice(2);

    const argsArr = argv.reduce((resArr, item, index, arr) => { if (item.startsWith('--')) {
      return [...resArr, `${item.slice(2)} is ${arr[index + 1]}`];
    } else {
      return resArr;
    }}, []);
    const result = argsArr.join(', ');
    console.log( result)
};

parseArgs();