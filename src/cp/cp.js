import cp from 'child_process'

export const spawnChildProcess = async (args) => {
    const script = cp.spawn('node', ['./files/script.js', ...args])

    script.stdout.on('data', (data) => {
        process.stdout.write(data, 'utf-8')
    })

    process.stdin.on('data', (data) => {
        if(data.toString().includes("CLOSE")) process.exit(0)
        script.stdin.write(data, 'utf-8')
    })
};

spawnChildProcess(['dasdasd', 'dasdas'])