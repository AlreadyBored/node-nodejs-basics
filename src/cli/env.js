export const parseEnv = () => {
  const env = process.env
  let data = ''
  for(let i = 0;i < Object.keys(env).length; i++){
    if(Object.keys(env)[i].split('_')[0] === 'RSS'){
      data += Object.keys(env)[i] + '=' +env[Object.keys(env)[i]]+'; '
    }
  }
  console.log(data)
};
parseEnv()