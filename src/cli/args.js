const { argv } = process;
export const parseArgs = () => {

  let result = [...argv].reduce((acc,item,index)=>{
    if(item.substring(0, 2) !== '--') return acc
    const values = item.split('=')
    return `${acc}${acc.length ? ',':''} ${values[0]} is ${values[1]}`
  },'')

  console.log(result);
};

export default (() => {
  parseArgs();
})();
