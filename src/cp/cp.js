import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
    fork(`${import.meta.dirname}/files/script.js`, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
