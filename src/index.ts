import Grimpan from './grimpan.js';

function main() {
  const g1 = Grimpan.getInstance();
  const g2 = Grimpan.getInstance();

  console.log(g1 === g2); // true
}

main();
