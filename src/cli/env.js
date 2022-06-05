export const parseEnv = () => {
    let outputString = ""
    Object.entries(process.env).filter(([key,value]) => key.substring(0,4) === 'RSS_').map(([key,value]) => outputString = outputString.concat(`${key}=${value}; `));
    outputString !== ""  ?  console.log(outputString.slice(0,outputString.length-2)) : null;
};