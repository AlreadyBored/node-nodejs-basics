import  readline from 'readline/promises';
import fs  from 'node:fs'
import { readdir } from 'fs/promises';
import { chdir, cwd } from 'node:process';
import  { stdin as input, stdout as output } from 'process';
const ac = new AbortController();
import os from 'os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { up as navigationUp, cd as goTo } from './navigation/navigation.js';
import { read as readFile,create,rn, copy,move,remove } from './operations/operations.js'; 
import { systemEol } from './os/systemInfo.js';
import { calculateHash } from './utils/hash.js';
import { compress as brotliCompress } from './utils/compress.js';
import { deCompress as brotliDeCompress } from './utils/decompress.js';

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
        //navigation
          up: (dirname,arg, ) => navigationUp(dirname, arg), 
          cd: (dirname,arg, ) => goTo(dirname, arg),
          //operations 
          cat: (dirname,arg, ) => readFile(dirname, arg), 
          add: (dirname,arg, ) => create(dirname, arg), 
          rename: (dirname,arg, argTwo) => rn(dirname,arg,argTwo), 
          cp:(dirname,arg, argTwo) => copy(dirname,arg,argTwo),
          mv:(dirname,arg, argTwo) => move(dirname,arg,argTwo),
          rm:(dirname,arg, argTwo) => remove(dirname,arg,argTwo),
          //os
           os:(dirname,arg, argTwo) => systemEol(dirname,arg,argTwo),
           //hash
           hash:(dirname,arg,argTwo) => calculateHash(dirname,arg,argTwo),
           //compress
           compress:(dirname,arg,argTwo) => brotliCompress(dirname,arg,argTwo),
           decompress:(dirname,arg,argTwo) => brotliDeCompress(dirname,arg,argTwo),
        async ls(){
            try {
                let newObjArray = []
            const files = await readdir(process.cwd(),{withFileTypes: true});
            for (const file of files){
                
                const newObj = {
                    Name: file.name,
                    Type: `${file.isDirectory() === true ? 'Directory' 
                    : file.isFile() === true ? 'File' : 'Unknown'}`
                };
                 newObjArray.push(newObj);
            }
            let sortedArr = newObjArray.sort((a,b) => a.Type.localeCompare(b.Type)) || a.Name.localeCompare(b.Name)
            //console.table([newObjArray])
            console.table(sortedArr)
            
            } catch (err) {
            console.error(err);
            }
        },
        ".exit"(){
            rl.close()
        }
    }

    rl.on('line', (name) => {
        let trimmedInput = name.trim()
       let userCommand = trimmedInput.split(' ')[0]
       let userArg = name.trim().split(' ')[1]
       let secondUserArg = name.trim().split(' ')[2]
        if(!trimmedInput){
            rl.prompt()
            return
        }
        const command = commands[userCommand]
        if(command){
            try{
                console.log(`You are currently working in ${process.cwd()}`)
                command(process.cwd(),userArg,secondUserArg)

            }catch(err){
                console.log('Operation failed')
            }
        }else{
            console.log('Invalid Input')
        }
        rl.prompt()
    }).on('close',() => {
        console.log('bye'),
        process.exit(0)
    })