export const parseArgs = () => {
  const list = process.argv.slice( 2, process.argv.length );
  list.forEach( (item,index) => {
      let next = process.argv[index+3];
    if(item.includes('--')){
        console.log(`${item.replace('--','')} is ${next}`);
    }
  });
};
parseArgs();