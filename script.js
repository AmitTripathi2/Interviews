const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the value of x: ", function(x) {
  x = parseInt(x);
  let count;
  
  if (x % 2 === 0) {
    count = x - 1;
  } else {
    count = x;
  }
  
  let number = 1;
  let output = "Output: ";

  for (let i = 0; i < count; i++) {
    output += number;
    if (i < count - 1) {
      output += ", ";
    }
    number += 2;
  }

  console.log(output);
  rl.close();
});
