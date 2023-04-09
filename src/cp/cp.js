import {fork, spawn} from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url';

const childFileName = 'script.js'
const folderName = 'files'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, folderName, childFileName)

const spawnChildProcess = async (args) => {
    const childProcess = fork(filePath, args, {silent: false})

    // process.stdin.pipe(childProcess.stdin)
    // childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['argument1', 'argument2'] );
