import process from 'node:process'
import { printWelcome } from '../src/utils/printWelcome.js';
import { getUserName } from '../src/utils/getUserName.js';
import { commandDispatch, printCommandsPromts } from '../src/utils/commandDispatch.js';
import { homedir } from 'node:os';

const fileManager = async () => {
    const [shell, filename, cliUserName] = process.argv
    const userName = getUserName(cliUserName)
    
    printWelcome(userName)

    let currentWorkingDir = { path: homedir() }
    printCommandsPromts(currentWorkingDir.path);
    process.stdin.on("data", async (input) => {
        const [command, ...args] = input.toString().trim().split(' ')
        printCommandsPromts(currentWorkingDir.path);
        await commandDispatch(command, args, currentWorkingDir, userName);
    });

    process.on('SIGINT', () => {
        commandDispatch('SIGINT', '', userName)
        process.exit(1);
    })
}

await fileManager();