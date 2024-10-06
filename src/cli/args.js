const parseArgs = () => {
    const arrValue = process.argv.join(' ').match(/--\w+\s\w+/gm)
    let res = ''
    
    arrValue.forEach((item, index) => {
      const [ value1, value2 ] = item.slice(2).split(' ')
  
      res +=  value1 + ' is ' + value2 
      
      if( (arrValue.length - 1) != index) {
        res +=  ', '
      }
      
    });
  
    console.log(res)
  };
  
  parseArgs();