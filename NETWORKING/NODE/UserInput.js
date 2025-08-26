/************* KEEP BELOW CODE AS IT IS *********************/
/**
 * This code has been taken from: https://codeforces.com/blog/entry/69610
 * I am not the owner of the readLine function below, understanding them require knowledge of basic NodeJS I/O and streams
 */
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// to run, after typing all the input values press ctrl+z.

function main() {
  console.log("Enter the first number: ");
  let x = readLine();
  console.log("Enter the second number: ");
  let y = readLine();
  console.log(Number(x) - Number(y));
}
