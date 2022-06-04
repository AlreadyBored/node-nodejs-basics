import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

export const parseArgs =  () => {
   const rl = readline.createInterface({ input, output });

   rl.question(' ', (value) => {
      rl.question(' ', (value2) => {
         console.log(`propName is ${value}, prop2Name is ${value2}`);
         rl.close();
      });
   });
};
// rl.close();
parseArgs()