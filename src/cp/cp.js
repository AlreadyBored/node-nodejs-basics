import { spawn } from 'child_process';
import path from "path";
import { fileURLToPath } from "url";


const spawnChildProcess = async (args) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const sourcePath = path.join(__dirname,"files", "script.js");
    const childProcess = spawn('node', [sourcePath, ...args], { stdio: ['pipe', 'pipe', 'inherit','ipc'] });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
