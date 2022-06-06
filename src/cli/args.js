export const parseArgs = () => {
  process.argv.map((process, idx, arr) => {
      if(process.includes('--prop')) {
          console.log(`${process} ${arr[idx + 1]}`)
      }
  });


};
