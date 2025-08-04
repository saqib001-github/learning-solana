import { generateMnemonic, mnemonicToSeedSync } from 'bip39';
import { derivePath } from 'ed25519-hd-key'
import nacl from 'tweetnacl';
import { Keypair } from '@solana/web3.js';

const mnemonic = generateMnemonic();

console.log("Generated Mnemonic:", mnemonic);

const seed = mnemonicToSeedSync(mnemonic);

for (let i = 0; i < 4; i++) {
    const path = `m/44'/501'/${i}'/0'`; // derivation path
    const derivedSeed = derivePath(path, seed.toString('hex')).key;
    console.log(`${path} : \n`, derivedSeed);
    let secret = nacl.sign.keyPair.fromSeed(derivedSeed);
    console.log(secret);
    secret = secret.secretKey;
    console.log("Public key", Keypair.fromSecretKey(secret).publicKey.toBase58());

}