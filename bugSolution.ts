function printNumbers(n: number): void {
  if (n <= 0) {
    return; // Explicitly handle non-positive cases
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(0); // Correctly does nothing
printNumbers(-1); // Correctly does nothing