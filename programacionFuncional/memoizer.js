

const memo = [0, 1];
const fib = n => {
  if (!memo[n]) {
    memo[n] = fib(n - 1) + fib(n - 2);
  }
  
  return memo[n];
}

const memo = { 1: 1, 2: 2 };
const fact = n => {
  if (!memo[n]) {
    memo[n] = n * fact(n - 1);
  }
  
  return memo[n];
}

const memoizer = (memo, formula) => {
  return n => {
    if (!memo[n]) {
      memo[n] = formula(n);
    }

    return memo[n];
  }
}

const factorial = memoizer({ 1: 1 }, n => {
  return n * factorial(n - 1);
})




// const factorial = memoizer([1, 1], (recur, n) => {
//   return n * recur(n - 1);
// });
// factorial(5); // 120

// const fibonacci = memoizer([0, 1], (recur, n) => {
//   return recur(n - 1) + recur(n - 2);
// });
// fibonacci(7); // 13