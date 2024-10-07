import { fork as child_processFork } from 'child_process';
import { join as pathJoin, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const scriptFile = 'script.js';
const scriptFolder = 'files';
const scriptFullPath = pathJoin(__dirname, scriptFolder, scriptFile);

const spawnChildProcess = async (args) => {
    const forkChildProcess = child_processFork(scriptFullPath, args.slice(2), {silent: true});
    process.stdin.pipe(forkChildProcess.stdin);
    forkChildProcess.stdout.pipe(process.stdout);
}

spawnChildProcess(process.argv);
