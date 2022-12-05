const parseArgs = () => {
  let arr = process.argv;
  for (let i = 2; i < arr.length; i = i + 2) {

    if (i < arr.length - 2) {
      console.info(arr[i].slice(2) + ' is ' + arr[i + 1] + ',');
    } else {
      console.info(arr[i].slice(2) + ' is ' + arr[i + 1]);
    }
  }
};

parseArgs();
