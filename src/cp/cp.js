import child_process from 'child_process'


export const spawnChildProcess = async (args) => {
    const child = child_process.fork('./files/script.js', [...process.argv], { stdio: [ 'inherit', process.stdout.fd, 'pipe', 'ipc' ] })
}
