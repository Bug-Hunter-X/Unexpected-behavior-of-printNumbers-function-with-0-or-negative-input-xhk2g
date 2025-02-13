# Unexpected behavior of printNumbers function with 0 or negative input

This code demonstrates an unexpected behavior in a TypeScript function that is supposed to print numbers from 1 to n. When the input n is 0 or negative, the function does not throw an error but it also does not print anything. This might not be the intended behavior. 

## Bug
The provided `printNumbers` function works correctly for positive inputs.  However, for 0 or negative inputs it silently does nothing.  The expectation is that it should either print nothing or perhaps handle the edge cases more explicitly.