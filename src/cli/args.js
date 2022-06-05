import { argv } from 'node:process';

export const parseArgs = () => {
   const propName = argv[2].slice(2);
   const value = argv[3];
   const prop2Name = argv[4].slice(2);
   const value2 = argv[5];

   console.log(`${propName} is ${value}, ${prop2Name} is ${value2}`)
};

//node args.js --propName value --prop2Name value2   - for checking
parseArgs()
