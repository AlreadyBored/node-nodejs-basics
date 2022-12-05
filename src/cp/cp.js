import {fileURLToPath} from "url";
import {dirname, join} from "path";
import {fork} from "child_process"

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename)
  const fileName = "script.js"
  const path = join(__dirname, "files",fileName)
  fork(path, args)
};

spawnChildProcess(["arg1", "arg2"]);

