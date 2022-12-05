const parseArgs = () => {
  const arr = []
  for (let i = 0; i<process.argv.length; i++) {
    if (process.argv[i].startsWith("--")) {
      arr.push(`${process.argv[i].slice(2)} is ${process.argv[i + 1]}`)
    }
  }
  console.log(arr.join(", "))
};

parseArgs();