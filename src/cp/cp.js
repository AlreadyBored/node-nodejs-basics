import {fork} from "child_process";
const FILE_PATH = "src/cp/files/script";

const spawnChildProcess = async (args) => {
    const childProccess = fork(FILE_PATH, args, {silent: true});

    process.stdin.pipe(childProccess.stdin);

    childProccess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( );
