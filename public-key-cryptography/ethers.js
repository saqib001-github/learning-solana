import { ethers } from 'ethers';

const wallet = ethers.Wallet.createRandom();

//Extract public and private keys
const pub_key = wallet.address;
const pri_key = wallet.privateKey;

console.log('Public Key:', pub_key);
console.log('Private Key:', pri_key);

const message = "Hey there!";

// sign the message
const signature = await wallet.signMessage(message);
console.log("Signature: ", signature);

// verify sign
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address: ", recoveredAddress);
console.log("Signature is valid: ", recoveredAddress === pub_key);
