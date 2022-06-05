import { exec } from "child_process";

const spawnChildProcess = async (args) => {
    exec(`node "./files/script.js" ${args}`, (err, stdout) => {
        stdout.write( stdout );
    })
};

export default  spawnChildProcess();