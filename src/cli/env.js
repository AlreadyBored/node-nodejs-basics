export const parseEnv = () => {
   process.env.RSS_name1=1
   process.env.RSS_name2=2
   console.log(`${process.env.RSS_name1};  ${process.env.RSS_name2}`)
};
parseEnv()