import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import {fork} from "child_process";
import * as path  from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const spawnChildProcess = async (args) => {
    const child = fork(path.join(__dirname, 'files', 'script.js'), args , {stdio: ['pipe', 'pipe', 'pipe', 'ipc']});
    child.stdout.on('data', (data) => { console.log(`stdout: ${data}`); })
};

await spawnChildProcess(["Asda","!23","xzcz"]);