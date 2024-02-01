import { chdir, cwd } from 'node:process';

 export async function changeDir(arg){
        try {
    await chdir(arg);
    console.log(`New directory: ${cwd()}`);
    } catch (err) {
    console.error(`chdir: ${err}`);
}
    }