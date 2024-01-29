import path from "path";
import { fileURLToPath } from "url";
import cp from "child_process";

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const subPath = path.join(__dirname, "files");
  const childProcess = cp.spawn("node", [
    path.join(subPath, "script.js"),
    ...args,
  ]);

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.setEncoding("utf8");

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
};

spawnChildProcess(["Hello", "world"]);
