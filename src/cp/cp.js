import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", ["src/cp/files/script.js", ...args]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);

  //   childProcess.stdout.on("data", (data) => {
  //     console.log("data:", data.toString());
  //   });
};

spawnChildProcess(["puk1", "puk2", "puk3"]);
