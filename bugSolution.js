function foo(a, b) {
  if (a === null || b === null) {
    console.warn("Null value encountered. Returning NaN.");
    return NaN; 
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    console.error("Invalid input: Non-numeric values provided.");
    return NaN;
  }
  return a + b; 
}

console.log(foo(null, 1)); // Output: NaN (with warning)
console.log(foo(1, null)); // Output: NaN (with warning)
console.log(foo(1, 2));    // Output: 3
console.log(foo(null, null)); // Output: NaN (with warning)
console.log(foo('a',1)); // Output: NaN (with error) 