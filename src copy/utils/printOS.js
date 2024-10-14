import os from 'node:os'

export const printOS = (_, type) => {
    switch (type) {
        case "--EOL": {
            console.log(`EOL is - ${JSON.stringify(os.EOL)}`)
            break;
        }
        case "--cpus":
            console.log(`CPUS - ${JSON.stringify(os.cpus())}`)
            break;
        case "--homedir":
            console.log(`Homedir is - ${JSON.stringify(os.homedir())}`)
            break;
        case "--username":
            console.log(`User - ${JSON.stringify(os.userInfo().username)}`)
            break;
        case "--architecture":
            console.log(`Architecture is - ${JSON.stringify(os.arch())}`)
            break;
        default:
            console.error('Invalid input')
    }
}