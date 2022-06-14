const readLine = require("readline");
let rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let ans = "sajal";
let userans = "no ans";
rl.question("what is your name? \n", (answer) => {
  if (answer === ans) {
    userans = answer;
    console.log("correct answer");
    rl.close();
  } else {
    rl.setPrompt("Incorrect Answer please try again \n");
    rl.prompt();
    rl.on("line", (userInput) => {
      if (userInput === ans) {
        console.log("correct answer bro");
        rl.close();
      } else {
        rl.setPrompt(`Your answer ${userInput} was wrong, try again \n`);
        rl.prompt();
      }
    });
  }
});

console.log(userans);

rl.on("close", () => console.log("corect"));

// output1:
// what is your name?
// no ans
// sajal
// correct answer
// corect

//output2:
// what is your name?
// no ans
// manu
// Incorrect Answer please try again
// manu
// Your answer manu was wrong, try again
// sajal
// correct answer bro
// corect
