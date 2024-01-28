const parseArgs = () => {
   const args = process.argv.slice(2);
   let output = '';
   for (let i = 0; i < args.length; i += 2) {

       const propName = args[i].replace('--', '');

       const value = args[i + 1];

       output += `${propName} is ${value}`;

       if (i < args.length - 2) output += ', ';
   }

   console.log(output);
};

parseArgs();