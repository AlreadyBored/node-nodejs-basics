import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  const child = fork("./src/cp/files/script.js", args);

  process.stdin.onmessage = (data) => {
    child.send(data);
  };

  child.on("message", (message) => {
    console.log(`Received from child process: ${message}`);
  });

  child.on("close", function (code) {
    console.log(`child process finished with code: ${code}`);
  });
};

// tested with such command:
// > npm run cp --some-arg value1 --other 1337 --arg2 42
// spawnChildProcess(process.argv.slice(2));

// or comment line above and uncomment below one:
spawnChildProcess(["value1", 1337, 42]);
