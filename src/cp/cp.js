import * as childProcess from "child_process";
import path from "path";
import * as url from "url";
import { stdout, stdin } from "process";
import { pipeline } from "stream";

export const spawnChildProcess = async (args) => {
  const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.resolve(_dirname, "files", "script.js");
  const child = childProcess.fork(filePath, args, {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  });
  pipeline(stdin, child.stdin, child.stdout, stdout, () => {});
};
spawnChildProcess([78]);
