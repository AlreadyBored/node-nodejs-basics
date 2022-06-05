import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

  const forkProcess = fork(__dirname  + `/files/script.js`, args);

  forkProcess.on("message", (msg) => {
    process.stdout.write(msg);
  });

  process.stdin.on("data", (data) => {
    forkProcess.send(data);
  });
};

spawnChildProcess(["a", "b", "c"]);
