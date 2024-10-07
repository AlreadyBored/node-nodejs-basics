const { execFile } = require('child_process');

const spawnChildProcess = async (args) => {
    return new Promise((resolve, reject) => {
        execFile('path/to/your/executable', args, (error, stdout, stderr) => {
            if (error) {
                return reject(`Error: ${error.message}`);
            }
            if (stderr) {
                return reject(`Error: ${stderr}`);
            }
            resolve(stdout);
        });
    });
};

spawnChildProcess(['someArgument1', 'someArgument2'])
    .then(output => {
        console.log('Output:', output);
    })
    .catch(err => {
        console.error('Error:', err);
    });
