import path from 'path';
import { fork } from 'child_process';
import {getExecutedFileDirname} from "../../helpers.js";

const scriptFilePath = path.join(getExecutedFileDirname(import.meta.url), 'files', 'script.js');
const spawnChildProcess = async (...args) => {
  const childProcess = fork(scriptFilePath, args, { silent: true });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess("someArgument1", "someArgument2");
