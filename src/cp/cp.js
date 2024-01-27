import { spawn } from 'child_process'
import {fileURLToPath} from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const childFile = path.resolve(__dirname, './files/script.js')
    const childProcess = spawn("node", [childFile, ...args]);

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.on("data",  (data) => {
        process.stdout.write(data.toString());
    });

    childProcess.on("exit", (code) => {
        console.log(`ChildProcess exit with code: ${code}`)
    })
};

await spawnChildProcess( ['someArgument1', 'someArgument2']);
