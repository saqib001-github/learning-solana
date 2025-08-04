import * as secp from '@noble/secp256k1';

async function main(){
	// generating random private key
	const p_key = secp.utils.randomPrivateKey();

	// encoding message in utf-8 format
	const message = new TextEncoder().encode("Hello!, World");

	// generating public key from private key
	const pub_key = secp.getPublicKey(p_key);

	// signing message 
	const signature = await secp.signAsync(message, p_key);

	// verifying message using public key
	const isValid = secp.verify(signature, message, pub_key);

	console.log(isValid);
}

main();
