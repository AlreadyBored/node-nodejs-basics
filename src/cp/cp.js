import cp from "child_process";
export const spawnChildProcess = async (args) => {
    let child = cp.fork('./files/script.js',args)
};


spawnChildProcess([1,2,3,4,5,6])