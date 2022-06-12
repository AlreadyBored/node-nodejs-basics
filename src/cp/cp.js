import { exec } from "child_process";

export  const spawnChildProcess = async (args) => {
    exec(`node "./files/script.js" ${args}`, (err, stdout) => {
        stdout.write( stdout );
    })
};

  spawnChildProcess();