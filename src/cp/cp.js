import { fork } from 'child_process';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout} from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    const childProcess = fork(resolve(__dirname, 'files/script.js'), args, { stdio: 'pipe' });

    stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(stdout);
};

await spawnChildProcess(['qwe', 'wer', 'ert', 'CLOSE']);
