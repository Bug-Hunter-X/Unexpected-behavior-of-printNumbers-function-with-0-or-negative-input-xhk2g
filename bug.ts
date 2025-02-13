function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(0); // Doesn't print anything, but shouldn't throw an error
printNumbers(-1); // Doesn't print anything, but shouldn't throw an error