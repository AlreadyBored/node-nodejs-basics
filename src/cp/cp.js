import {execFile} from "child_process"
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const childProcessPath = path.join(__dirname, "/files/" ,"script.js")

export const spawnChildProcess = async (args) => {
    const { stdin,stdout } = execFile('node', [childProcessPath, args]);
    process.stdin.pipe(stdin)
    stdout.pipe(process.stdout)

};
//spawnChildProcess("--v, sdkjas, sakldlk , CLOSE")