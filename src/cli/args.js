import process from "process";

const parseArgs = () => {
  const args = process.argv;

  const filteredArgs = args
    .map((value, idx, arr) => {
      if (value.startsWith("--")) {
        return [value, arr[idx + 1]];
      }
    })
    .filter((value) => Array.isArray(value));

  filteredArgs.forEach(([prop, value]) => {
    console.log(`${prop} is ${value}`);
  });
};

parseArgs();
