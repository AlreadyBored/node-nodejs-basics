const parseArgs = () => {
  const argvList = process.argv.slice(2);
  console.log(argvList)
  let str = '';
  for (let i = 0; i < argvList.length; i += 2) {
    str += `${argvList[i].slice(2)} is ${argvList[i + 1]}, `;
  }
  console.log(str.slice(0, str.length - 2));
}

parseArgs();
