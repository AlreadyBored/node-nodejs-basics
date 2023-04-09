
import path from 'path';
import {fileURLToPath} from 'url';
import {spawn} from 'child_process';

const scriptPath=fileURLToPath(import.meta.url)
const dirName=path.dirname(scriptPath)

const pathToScriptFile=path.join(dirName,'files','script.js')


const spawnChildProcess = async (args) => {

    const child=spawn('node',[pathToScriptFile,...args],
        {
            stdio: [null, null, null,'ipc'],
            encoding: 'utf-8'
        }
    )

    
    child.stdout.pipe(process.stdout)
    process.stdin.pipe(child.stdin)


};

spawnChildProcess( [333, 444]);
