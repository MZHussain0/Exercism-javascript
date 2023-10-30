/**
 * Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.

The Caesar cipher is a simple shift cipher that relies on transposing all the letters in the alphabet using an integer key between 0 and 26. Using a key of 0 or 26 will always yield the same output due to modular arithmetic. The letter is shifted for as many values as the value of the key.

The general notation for rotational ciphers is ROT + <key>. The most commonly used rotational cipher is ROT13.

A ROT13 on the Latin alphabet would be as follows:

Plain:  abcdefghijklmnopqrstuvwxyz
Cipher: nopqrstuvwxyzabcdefghijklm
It is stronger than the Atbash cipher because it has 27 possible keys, and 25 usable keys.

Ciphertext is written out in the same formatting as the input including spaces and punctuation.
 */

const rotate = (input, key) => {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let charCode = input.charCodeAt(i);
    if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) {
      output += String.fromCharCode(
        ((charCode - "A".charCodeAt(0) + key) % 26) + "A".charCodeAt(0)
      );
    } else if (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
      output += String.fromCharCode(
        ((charCode - "a".charCodeAt(0) + key) % 26) + "a".charCodeAt(0)
      );
    } else {
      output += input[i];
    }
  }
  return output;
};

console.log(rotate("omg", 1));
