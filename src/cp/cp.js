import {spawn} from 'child_process';
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptFile = path.join(__dirname, 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [scriptFile, ...args], {stdio: ['pipe','pipe','inherit']});
    process.stdin.pipe(childProcess.stdin)
    process.stdout.pipe(childProcess.stdout)


};

// Put your arguments in function call to test this functionality
spawnChildProcess( [1,2]);
