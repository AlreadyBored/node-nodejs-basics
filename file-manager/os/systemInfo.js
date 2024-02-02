import os from 'node:os';

const systemInfo = os.EOL;
const cpus = os.cpus();
const homeDir = os.homedir()
const userInfo = os.userInfo()
const architecture = os.arch()

//need to be modified so checks all the input arguments and displays in order

export const systemEol = (dir,arg) => {
    arg = arg.trim()
    if(arg === '--EOL'){
        console.log(JSON.stringify(systemInfo))
    }else if(arg === '--cpus'){
        let cpuInfos = []
        cpus.forEach((cpu, index) => {
            let cpuInfo = {}
            cpuInfo['Model'] = cpu.model
            cpuInfo['Clock Rate'] = `${parseInt(cpu.speed) / 1000} GHz`
            cpuInfos.push(cpuInfo)
        })
        console.table(cpuInfos)
    }else if(arg === '--homedir'){
        console.log(homeDir)
    }else if(arg == '--username'){
        console.log(userInfo.username)
    }else if(arg == '--architecture'){
        console.log(architecture)
    }
        
}