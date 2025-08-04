import crypto from 'crypto';

//simple finding a prefix
function findHashWithPrefix(prefix){
  let input = 0;
  while(true){
    let iStr = 'saqib' + input.toString();
    let output = crypto.createHash('sha512').update(iStr).digest('hex');
    if(output.startsWith(prefix)){
      return {output,input:iStr};
    }
    input++;
  }
}
console.log(findHashWithPrefix('0000'));
