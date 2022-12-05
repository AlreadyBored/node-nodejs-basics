import child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(
    import.meta.url));

export const spawnChildProcess = async() => {
    const childScript = child_process.fork(
        path.join(__dirname, './files/script.js'),
        process.argv
    );
    childScript.on('message', (data) => {
        console.log('(Main) Received from child:' + data.trim());
        process.exit();
    });
};
spawnChildProcess();

