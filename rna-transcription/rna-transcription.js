//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const complements = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export const toRna = (dna) => {
  let rna = "";
  for (const alpha of dna) {
    rna += complements[alpha];
  }
  return rna;
};

console.log(toRna("TACG"));

export const toRna2 = ([...nucleotides]) =>
  nucleotides.reduce((rna, nucleotide) => rna + complements[nucleotide], "");
