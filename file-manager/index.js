import  readline from 'readline/promises';
import { readdir } from 'fs/promises';
import { chdir, cwd } from 'node:process';
import  { stdin as input, stdout as output } from 'process';
const ac = new AbortController();
import os from 'os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { up as navigationUp, cd as goTo } from './navigation/navigation.js';

const currentWorkingDirectory = path.basename(path.resolve(process.cwd()))
const __dirname = path.dirname(fileURLToPath(import.meta.url))

let newDir = path.resolve(__dirname,'..')
//console.log(newDir,'newpath')
//const destinationFile = path.join(__dirname, 'files', 'fresh.txt')
    const homeDirectory = os.homedir();

    const username = process.argv?.slice(2)[0]?.split('=')[1]
   // console.log(username)
    if(username?.length > 0){

        console.log(`Welcome to the File Manager, ${username}!`)
        console.log(`You are currently working in ${currentWorkingDirectory}`)
    }else{

        console.log('Welcome to the cli, anonymous!')
        console.log(path.parse(process.cwd()).root,'root@!')
        console.log(`You are currently working in ${__dirname}`)

    }
  const rl = readline.createInterface({ input, output, prompt: '>' });
   // rl.question('whats up? :',(name) => console.log(`hey ${name}`))
   //console.table([{ Name: 'name', Type: ''},]);
    rl.prompt()
    const commands = {
        help() {
            console.log(`Commands ${Object.keys(commands).join(', ')}` )
        },
        hello(){
            console.log(`Hello There`)
        },
          up: (arg, dirname) => navigationUp(arg, dirname), 
          cd: (arg, dirname) => goTo(arg, dirname), 
        async ls(){
            try {
                let newObjArray = []
            const files = await readdir(process.cwd());
            for (const file of files){
                const newObj = {
                    name: file,
                    type: 'file'
                };
                 newObjArray.push(newObj);
            }
            
            //console.table([newObjArray])
            console.table(newObjArray)
            
            } catch (err) {
            console.error(err);
            }
        },
        ".exit"(){
            rl.close()
        }
    }

    rl.on('line', (name) => {
       let userCommand = name.trim().split(' ')[0]
       let userArg = name.trim().split(' ')[1]
      
        const command = commands[userCommand]
        if(command){
            command(userArg,process.cwd())
        }else{
            console.log('UNkown Command')
        }
        console.log(`You are currently working in ${process.cwd()}`)
    }).on('close',() => {
        console.log('bye'),
        process.exit(0)
    })