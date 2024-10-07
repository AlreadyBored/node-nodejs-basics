import cp from "child_process";

const spawnChildProcess = async (args) => {
  // Write your code here
  const childp = cp.spawn("node", [
    import.meta.dirname + "/files/script.js",
    ...args,
  ]);

  // Pipe the stdin of the parent process to the child process
  process.stdin.on("data", (data) => {
    childp.stdin.write(data + "\n");
  });
  // or
  // process.stdin.pipe(childp.stdin);

  // Pipe the stdout of the child process to the stdout of the parent process
  childp.stdout.on("data", (data) => {
    process.stdout.write(data + "\n");
  });
  // or
  // childp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(process.argv.slice(2));
