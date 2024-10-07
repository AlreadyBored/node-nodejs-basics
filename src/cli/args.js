const parseArgs = () => {
  const arrayArgs = process.argv;
  let resultArr = [];
  
  arrayArgs.map((item, index, array) => {
    if(item.slice(0, 2) === '--'){
      resultArr.push(`${item.slice(2)} is ${array[index + 1]}`);
    }
  });

  console.log(resultArr.join(', '));
};

parseArgs();